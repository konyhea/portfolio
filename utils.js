// function to get today date
const todayDate = () => {
    return new Date().getFullYear()
}

const todayTime = () => {
    return new Date().toISOString().split('T')[1].split('.')[0];
};



const imagesSources = [
    { imgSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', imgAlt: 'Amsterdam canal houses at sunset' },
    { imgSrc: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg', imgAlt: 'Eiffel Tower in Autumn, Paris' },
    { imgSrc: 'https://cdn.pixabay.com/photo/2017/06/20/19/22/shanghai-2423862_1280.jpg', imgAlt: 'Shanghai skyline at dusk' },
    { imgSrc: 'https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-27189.jpg', imgAlt: 'Central Park, New York' },
    { imgSrc: 'https://burst.shopifycdn.com/photos/chicago-skyline.jpg', imgAlt: 'Chicago cityscape aerial view' },
    { imgSrc: 'https://media.istockphoto.com/photos/dubai-skyline-at-night-picture-id1146517110', imgAlt: 'Dubai cityscape at night' },
];

// Select image and alt text elements
const dynamicImageSrc = document.querySelector('#imgSrc');
const dynamicAlt = document.querySelector('.alt-images');

// Current index for the image
let currentIndex = 0;

// Function to update image and alt text
function handleImageChanges() {
    const { imgSrc, imgAlt } = imagesSources[currentIndex];
    dynamicImageSrc.src = imgSrc;
    dynamicImageSrc.alt = imgAlt;
    dynamicAlt.textContent = imgAlt;

    // Move to the next image, loop back if needed
    currentIndex = (currentIndex + 1) % imagesSources.length;
}

// Start the cycle
handleImageChanges(); // Load first image immediately
setInterval(handleImageChanges, 2000);

export { todayDate, todayTime }