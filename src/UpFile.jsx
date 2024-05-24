import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Text, Menu, MenuButton, MenuItem, MenuList, HStack } from "@chakra-ui/react";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { auth, app } from "./firebase";
import FilesSelector from './components/FilesSelector';

const UpFile = () => {

    const [file, setFile] = useState('Select');

    const uMail = auth.currentUser.email;
    let uId = auth.currentUser.uid;

    // Get a reference to the storage service
    const storage = getStorage();

    const uploadFile = () => {
    // Get the selected file from the input field
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0]; // Assuming only one file is selected

    // Create a reference to the location where you want to store the file
    const fileRef = ref(storage, `${uMail}/files/${file.name}`);

    // Upload the file to Firebase Storage
    uploadBytes(fileRef, file)
        .then((snapshot) => {
        console.log('File uploaded successfully:', snapshot);
        alert('File uploaded successfully');
        })
        .catch((error) => {
        console.error('Error uploading file:', error);
        alert('Error uploading file:', error);
        });
    }

    const onFileSelect = (file)=>{
        setFile(file);
    }

    const downloadFile = ()=>{
      const selectedFilePath = `${uMail}/files/${file}`;
      const fileRef = ref(storage, selectedFilePath);
      getDownloadURL(fileRef)
        .then((url)=>{
            // fUrl = url;
            // console.log(url);
            
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', file);
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
        <input className='inpPicker' type="file" accept='.pdf, .docx, .doc, .xlsx' id="fileInput" />
        <button className='btnW' onClick={uploadFile}>Upload File</button>
    </Box>
    <FilesSelector className='selector' uMail={uMail} file={file} onFileSelect={onFileSelect} />
    {/* <a id='downloader' href={`${uMail}/files/${file}`} download={`${file}`}><button className='btn'>Download</button></a> */}
    <button className='btn' onClick={downloadFile}>View</button>
    </HStack>
  )
}

export default UpFile
