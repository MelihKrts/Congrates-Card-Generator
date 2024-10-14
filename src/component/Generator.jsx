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
    html2canvas(card,{
      backgroundColor:null,
      useCORS:true
    }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'congrates-card.png';
      link.click();
    });
  };

  return (
    <section className='w-full p-4'>

      <div className='container flex flex-row relative flex-wrap'>

        <div className="w-full">
          <h2 className='text-center font-bold text-2xl mb-4'>How it Works</h2>

          <p className='text-justify mb-4'>
            To add content to the greeting card, you can add text, background color or background image. You can increase the text color and size. You can download the image to your computer by pressing the last button. You can see the preview on the left side
          </p>
        </div>

        <div className=' sm:w-full lg:w-1/2 md:w-1/3'>
          <h4 className='font-bold text-2xl py-2'>Preview</h4>
          <div id='card' className='w-full h-[340px] border rounded-lg  flex items-center justify-center overflow-hidden text-justify px-4' style={{
            width: '600px',
            height: '400px',
            backgroundImage: bgImage ? `url(${bgImage})` : 'none',
            backgroundSize: 'cover', 
            backgroundPosition: 'center',

          }}>
            <Draggable>
              <span style={{ color: fontColor, fontSize: `${fontSize}px`, whiteSpace:"pre-wrap", textAlign:"center" }}>
                {value}
              </span>
            </Draggable>

          </div>
        </div>

        <div className='lg:w-1/2 sm:w-full md:w-2/3'>
          <div className='w-full flex flex-col mt-10 mx-8'>

            <div className='w-3/4 mb-4'>
              <label>Enter a Text Message</label>
              <textarea type='text' required onChange={handleChange} value={value} className='rounded-[4px] bg-white border border-solid border-[#d4d7dd] outline-0  w-3/4 mt-3 pl-4 resize-none' placeholder='Enter a message' rows={4} />
            </div>

            <div className='w-1/2 mb-4'>
              <label className='ml-2 '>Background Color Select (Optional)</label>
              <input type='color' onChange={handleBgChange} value={bgColor} className='outline-0 rounded-[4px] bg-white border border-solid border-[#d4d7dd] w-1/5 mt-3' />
            </div>

            <div className='w-1/2 mb-4'>
              <label className='ml-2'>Add Background Image (Optional)</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />

            </div>

            <div className='w-1/2 mb-4'>
              <input type='color' onChange={handleFontColorChange} value={fontColor} className='outline-0 rounded-[4px] bg-white border border-solid border-[#d4d7dd] w-1/5 mt-3' />
              <label className='ml-2'>Font Color</label>
            </div>

            <div className='w-1/2 mb-2'>
              <input type='number' onChange={handleFontSizeChange} value={fontSize} min="10" max="50" className='rounded-[4px] bg-white border border-solid border-[#d4d7dd] outline-0 h-10 w-3/4 mt-3 pl-4' placeholder='Font Size' />
            </div>

            <div className='w-full mt-4 mb-6'>
              <button onClick={downloadImage} className='bg-blue-500 text-white py-2 px-4 rounded-lg'>Save as Image</button>
            </div>

            {/* <div className='w-full mt-4'>
              <button onClick={clearBg} className='bg-red-500 text-white py-2 px-4 rounded-lg'>Clear Background</button>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}
