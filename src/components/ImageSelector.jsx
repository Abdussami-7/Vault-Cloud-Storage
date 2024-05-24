import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { getStorage, ref, listAll } from 'firebase/storage';

const ACTIVE_COLOR = "blue.400";

const ImageSelector = ({ uMail, imgFile, onImgSelect }) => {

    const [imageList, setImageList] = useState([]);
    
    useEffect(() => {    

      // Get a reference to the storage service
      const storage = getStorage();

      // Create a reference to the location you want to list
      const storageRef = ref(storage, `${uMail}/images/`);

      let myImages = [];

      // List all items (files and folders) at the specified location
      listAll(storageRef)
      .then((res) => {
        myImages = res.items.map((itemRef) => {
          return itemRef.name;
        });
        setImageList(myImages);
        // console.log('Files fetched');
      })
      .catch((error) => {
        console.error('Error listing files:', error);
      });
    }), [imgFile];

return (
    <Box ml={2} mb={4}>
    <Text mb={2} fontSize="lg">
        Images:
    </Text>
    <Menu isLazy>
        <MenuButton as={Button}>{imgFile}</MenuButton>
        <MenuList bg="#110c1b">
        {imageList.map((img) => (
            <MenuItem
            key={img}
            color={img === imgFile ? ACTIVE_COLOR : ""}
            bg={img === imgFile ? "gray.900" : "transparent"}
            _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.900",
            }}
            onClick={() => onImgSelect(img)}
            >
            {img}
            </MenuItem>
        ))}
        </MenuList>
    </Menu>
    </Box>
);
};
export default ImageSelector;
