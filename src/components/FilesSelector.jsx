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

const FileSelector = ({ uMail, file, onFileSelect }) => {

    const [fileList, setFileList] = useState([]);
    
    useEffect(() => {    
        // console.log(file);

      // Get a reference to the storage service
      const storage = getStorage();

      // Create a reference to the location you want to list
      const storageRef = ref(storage, `${uMail}/files/`);

      let myFiles = [];

      // List all items (files and folders) at the specified location
      listAll(storageRef)
      .then((res) => {
        myFiles = res.items.map((itemRef) => {
          return itemRef.name;
        });
        setFileList(myFiles);
        // console.log('Files fetched');
      })
      .catch((error) => {
        console.error('Error listing files:', error);
      });
    }), [file];

return (
    <Box ml={2} mb={4}>
    <Text mb={2} fontSize="lg">
        Files:
    </Text>
    <Menu isLazy>
        <MenuButton as={Button}>{file}</MenuButton>
        <MenuList bg="#110c1b">
        {fileList.map((fileItem) => (
            <MenuItem
            key={fileItem}
            color={fileItem === file ? ACTIVE_COLOR : ""}
            bg={fileItem === file ? "gray.900" : "transparent"}
            _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.900",
            }}
            onClick={() => onFileSelect(fileItem)}
            >
            {fileItem}
            </MenuItem>
        ))}
        </MenuList>
    </Menu>
    </Box>
);
};
export default FileSelector;
