Image Upload & Filter App

This is a React-based application that allows users to upload images, apply filters (like grayscale and sepia), preview the images before uploading, and view a list of all uploaded images along with their details.

Features
Image Upload: Users can select and upload images from their device.
Image Preview: Preview the selected image with an applied filter before uploading.
Filters: Apply grayscale or sepia filters to the images.
Image List: Display a list of all uploaded images with details such as file name, upload date, and applied filters.

Installation
npm install

To start the application, run the following command:
npm start

Components Overview

ImageUpload.js
=>Handles the image selection and upload process.
=>Manages the state of the selected image and applied filter.
=>Contains the logic to trigger the upload and pass the image data to the parent component.

ImagePreview.js
=>Displays a preview of the selected image with the applied filter.

ImageFilters.js
=>Provides options for users to apply filters like grayscale and sepia.
=>Passes the selected filter to the ImageUpload component.

ImageList.js
=>Displays a list of all uploaded images.
=>Iterates over the images and renders the ImageDetails component for each image.

ImageDetails.js
=>Displays the details of a single image, including the image itself, file name, upload date, and applied filter.

App.js
=>The main application component that ties all the other components together.
=>Manages the state of all uploaded images and passes necessary props to child components.

Redux Usage
=>Redux is used to manage the global state of the application, including the list of uploaded images and the loading/error states during API calls.

Actions:::
=>>>>fetchImages: Fetches the list of uploaded images from the server.
=>>>>uploadImage: Uploads a new image to the server and updates the image list.
    
This README.md provides a clear and comprehensive overview of the project, making it easier for others to understand and contribute to it.