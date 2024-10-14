import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import Draggable from 'react-draggable';

export default function Generator() {
  const [value, setValue] = useState("");
  const [bgColor, setBgColor] = useState("");

  const [bgImage, setBgImage] = useState(null);
  const [fontColor, setFontColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("16");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleBgChange(e) {
    setBgColor(e.target.value);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBgImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  function handleFontColorChange(e) {
    setFontColor(e.target.value);
  }

  function handleFontSizeChange(e) {
    setFontSize(e.target.value);
  }

  // function clearBg() {
  //   setBgImage("")
  // }

  const downloadImage = () => {

    if (!value) {
      alert("Please enter a message before downloading the card.'")
      return
    }

    const card = document.getElementById('card');
    html2canvas(card, {
      backgroundColor: null,
      useCORS: true
    }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'congrates-card.png';
      link.click();
    });
  };

  return (
    <section className='w-full p-4 bg-teal-400'>

      <div className='container flex flex-row flex-wrap'>

        <div className='w-full'>
          <h2 className='text-center font-bold text-2xl mb-4'>How it Works</h2>
          <p className='text-justify mb-4 px-4'>
            To add content to the greeting card, you can add text, background color or background image. You can increase the text color and size. You can download the image to your computer by pressing the last button. You can see the preview on the left side
          </p>
        </div>

        <div className='sm:w-full md:w-1/3 lg:w-1/2 w-full'>
          <h4 className='font-bold text-2xl py-2'>Preview</h4>

          <div id='card' className='w-full h-[340px] border rounded-lg  flex items-center justify-center overflow-hidden text-justify' style={{
            width: '600px',
            height: '400px',
            backgroundImage: bgImage ? `url(${bgImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

          }}></div>

        </div>

      </div>

    </section>
  );
}
