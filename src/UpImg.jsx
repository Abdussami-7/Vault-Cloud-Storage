import React from 'react'
import { useState } from 'react';
import { Box, HStack, Text } from "@chakra-ui/react";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { auth, app } from "./firebase";
import ImageSelector from './components/ImageSelector';
import "./MyApp.css";

const UpImg = () => {

    const [imgFile, setImgFile] = useState('Select');

    const uMail = auth.currentUser.email;
    let uId = auth.currentUser.uid;

    // Get a reference to the storage service
    const storage = getStorage();

    const uploadImage = ()=> {
        // Get the selected image file from the input field
        const imageInput = document.getElementById('imageInput');
        const imageFile = imageInput.files[0]; // Assuming only one image file is selected

        // Check if a file is selected
        if (!imageFile) {
            alert('No image file selected');
            return;
        }

        // Create a reference to the location where you want to store the image file
        // You can specify the desired path and file name here
        const imagePath = `${uMail}/images/${imageFile.name}`; // Example: 'images/my_image.jpg'
        const imageRef = ref(storage, imagePath);

        // Upload the image file to Firebase Storage
        uploadBytes(imageRef, imageFile)
            .then((snapshot) => {
                console.log('Image uploaded successfully:', snapshot);
                alert('Image uploaded successfully');
            })
            .catch((error) => {
                console.error('Error uploading image:', error);
                alert('Error uploading image: ', error);
            });
    }

    const onImgSelect = (imgFile)=>{
        setImgFile(imgFile);
    }
    
    // let fUrl = '';
    const downloadImage = ()=>{
        const selectedImgPath = `${uMail}/images/${imgFile}`;
        const imgRef = ref(storage, selectedImgPath);
        getDownloadURL(imgRef)
            .then((url)=>{
                // fUrl = url;
                // console.log(url);
                
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', imgFile);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                // const link = document.getElementById('downloader');
                // link.href = url;
                // link.setAttribute('download', imgFile);
            });
    }
  return (
    <HStack spacing={10}>
    <Box className='InpContainer'>
        <input className='inpPicker' type="file" accept='image/*' id="imageInput" />
        <button className='btnW' onClick={uploadImage}>Upload Image</button>
    </Box>
    <ImageSelector className='selector' uMail={uMail} imgFile={imgFile} onImgSelect={onImgSelect} />
    {/* <a id='downloader' href={`${uMail}/images/${imgFile}`} download={`${imgFile}`}><button className='btn' onClick={downloadImage}>Download</button></a> */}
    {/* <a id='downloader' href={fUrl} download={`${imgFile}`}><button className='btn' onClick={downloadImage}>Download</button></a> */}
    <button className='btn' onClick={downloadImage}>View</button>
    </HStack>
  )
}

export default UpImg
