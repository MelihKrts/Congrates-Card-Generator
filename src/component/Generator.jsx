import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import Draggable from 'react-draggable';

export default function Generator() {
  const [fileName, setFileName] = useState('');
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
      setFileName(file.name);
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
    <section className='w-full p-4 bg-[#95a5a6]'>

      <div className='container flex flex-row flex-wrap'>

        <div className='w-full'>
          <h2 className='text-center font-bold text-2xl mb-4'>How it Works</h2>
          <p className='text-justify mb-4 px-4'>
            To add content to the greeting card, you can add text, background color or background image. You can increase the text color and size. You can download the image to your computer by pressing the last button. You can see the preview on the left side
          </p>
        </div>

        <div className='sm:w-full md:w-1/2 lg:w-1/2 w-full'>
          <h4 className='font-bold text-2xl py-2'>Preview</h4>

          <div id='card' className='w-full aspect-[3/2] max-w-[600px] rounded-lg flex items-center justify-center overflow-hidden text-justify bg-no-repeat bg-cover bg-center'
            style={{
              backgroundColor: bgColor,
              backgroundImage: bgImage ? `url(${bgImage})` : 'none',
            }}>

            <Draggable>
              <span style={{ color: fontColor, fontSize: `${fontSize}px`, whiteSpace: "pre-wrap", textAlign: "center" }}>
                {value}
              </span>
            </Draggable>

          </div>

        </div>

        <div className='sm:w-full md:w-1/2 lg:w-1/2 w-full'>

          <div className='w-full flex flex-col my-4'>

            <div className='w-full sm:w-full md:w-full lg:w-3/4 mb-2'>
              <label>Enter a Text Message</label>
              <textarea type='text' required onChange={handleChange} value={value} className='rounded-[4px] my-2 bg-white border border-solid border-[#d4d7dd] outline-0 w-full sm:w-full md:w-full lg:w-full py-2
             px-2 resize-none' placeholder='Enter a message' rows={4} />
            </div>

            <div className="w-full flex flex-col">
              <label>Background Color Select (Optional)</label>


              <input type='color' onChange={handleBgChange} value={bgColor} className='outline-0 rounded-[4px] bg-white border border-solid border-[#d4d7dd] w-1/12 my-3' />

            </div>

            <div className=' w-full flex flex-col'>
              <h5 className='mb-4'>Add Background Image (Optional)</h5>
              <label htmlFor='file-input' className='mb-4 rounded-lg bg-white text-black text-center px-4 border border-solid border-[#d4d7dd] outline-0 py-4 w-3/5 sm:w-2/3 md:w-1/2 lg:w-1/3 cursor-pointer'>
                {"Select an Image"}
              </label>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className='hidden'
              />
            </div>

            <div className='w-full flex flex-col'>
              <label>Font Size Increase / Decrease</label>

              <input type='number' onChange={handleFontSizeChange} value={fontSize} min="10" max="50" className='rounded-[4px] bg-white border border-solid border-[#d4d7dd] outline-0 h-10 w-2/4 sm:w-1/4 md:w-2/4 lg:w-1/4 my-3 pl-4' placeholder='Font Size' />

            </div>

            <div className='w-full flex flex-col'>
              <label>Font Color Change</label>

              <input type='color' onChange={handleFontColorChange} value={fontColor} className='outline-0 rounded-[4px] bg-white border border-solid border-[#d4d7dd] w-1/12 my-3' />

            </div>

            <div className='w-full mt-6 mb-6'>
              <button onClick={downloadImage} className='bg-blue-500 text-white py-2 px-4 rounded-lg'>Save as Image</button>
            </div>

          </div>

        </div>


      </div>

    </section>
  );
}
