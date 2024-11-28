import {useRef, useState} from "react";
import Inputfield from "~/component/Inputfield.jsx";

import Label from "~/component/Label.jsx";

import {MenuItem, Select} from "@mui/material";

import Button from "~/component/Button.jsx";
import {
    BrushIcon,
    FormatAlignCenterIcon,
    FormatAlignLeftIcon, FormatAlignRightIcon,
    FormatBoldIcon, FormatColorTextIcon,
    FormatItalicIcon,
    FormatUnderlinedIcon, ImageIcon
} from "~/icons/index.js";
import Draggable from "react-draggable";


export default function CardDesigner({platform}) {
    const [text, setText] = useState("");
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [showBGPicker, setShowBGPicker] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState("#fff");
    const [selectedValue, setSelectedValue] = useState("Host Grotesk");
    const [fontColor, setFontColor] = useState("#000")
    const [backgroundImage, setBackgroundImage] = useState(null)
    const [textStyles, setStyles] = useState({
        bold: false,
        italic: false,
        underline: false,
    });

    const [alignment, setAlignment] = useState("left")
    const [fontNumber, setFontNumber] = useState(24)
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file)
            setBackgroundImage(imageURL)
        }
    }


    const handleSelect = (e) => {
        setSelectedValue(e.target.value)
    }

    const toggleStyle = (style) => {
        setStyles((prevStyles) => ({
            ...prevStyles,
            [style]: !prevStyles[style]
        }))
    }

    const handleAlignment = (newAlignment) => {
        setAlignment(newAlignment)
    }

    const handleTextColor = () => {
        setShowColorPicker(!showColorPicker);
    }

    const handleBackgroundColor = () => {
        setShowBGPicker(!showBGPicker)
    }

    function isWhiteBackground(color) {
        const whiteColors = ["#fff", "#ffffff", "rgb(255, 255, 255)", "rgba(255, 255, 255, 1)"];
        return whiteColors.includes(color.toLowerCase());
    }

    // const handleSave = () => {
    //     const canvas = document.createElement("canvas");
    //     const ctx = canvas.getContext("2d");
    //
    //     canvas.width = platform.width;
    //     canvas.height = platform.height;
    //
    //     ctx.fillStyle = backgroundColor;
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    //
    //
    //     ctx.fillStyle = fontColor;
    //     ctx.font = `${fontNumber} ${selectedValue}`;
    //     ctx.textAlign = `left`;
    //     ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    //
    //
    //     const link = document.createElement("a");
    //     link.download = `${platform.name.replace(" ", "_")}.png`;
    //     link.href = canvas.toDataURL();
    //     link.click();
    // };

    // const handleSave = () => {
    //     const canvas = document.createElement("canvas");
    //     const ctx = canvas.getContext("2d");
    //
    //     canvas.width = platform.width;
    //     canvas.height = platform.height;
    //
    //     // Eğer bir arka plan resmi varsa, onu yükleyin ve canvas'a çizin
    //     if (backgroundImage) {
    //         const img = new Image();
    //         img.src = backgroundImage;
    //
    //         img.onload = () => {
    //             ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Resmi canvas'a çizin
    //
    //             // Metin stilini ayarla ve metni çiz
    //             ctx.fillStyle = fontColor;
    //             ctx.font = `${fontNumber} ${selectedValue}`;
    //             ctx.textAlign = `left`;
    //             ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    //
    //             // Görüntüyü kaydet
    //             const link = document.createElement("a");
    //             link.download = `${platform.name.replace(" ", "_")}.png`;
    //             link.href = canvas.toDataURL();
    //             link.click();
    //         };
    //     } else {
    //         // Arka plan resmi yoksa sadece renkli arka planı çiz
    //         ctx.fillStyle = backgroundColor;
    //         ctx.fillRect(0, 0, canvas.width, canvas.height);
    //
    //         // Metin stilini ayarla ve metni çiz
    //         ctx.fillStyle = fontColor;
    //         ctx.font = `${fontNumber} ${selectedValue}`;
    //         ctx.textAlign = `left`;
    //         ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    //
    //         // Görüntüyü kaydet
    //         const link = document.createElement("a");
    //         link.download = `${platform.name.replace(" ", "_")}.png`;
    //         link.href = canvas.toDataURL();
    //         link.click();
    //     }
    // };


    // const handleSave = () => {
    //     const canvas = document.createElement("canvas");
    //     const ctx = canvas.getContext("2d");
    //
    //     canvas.width = platform.width;
    //     canvas.height = platform.height;
    //
    //     // Set font size explicitly when drawing on canvas
    //     const fontSize = parseInt(fontNumber); // Ensure it's a number
    //
    //     if (backgroundImage) {
    //         const img = new Image();
    //         img.src = backgroundImage;
    //
    //         img.onload = () => {
    //             ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    //
    //             // Explicitly set font with size and family
    //             ctx.fillStyle = fontColor;
    //             ctx.font = `${fontSize}px ${selectedValue}`;
    //             ctx.textAlign = 'center'; // Changed to center to match preview
    //
    //             // Measure text to center it precisely
    //             const textMetrics = ctx.measureText(text);
    //             const textWidth = textMetrics.width;
    //             const textHeight = fontSize; // Approximate text height
    //
    //             ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    //
    //             // Görüntüyü kaydet
    //             const link = document.createElement("a");
    //             link.download = `${platform.name.replace(" ", "_")}.png`;
    //             link.href = canvas.toDataURL();
    //             link.click();
    //         };
    //     } else {
    //         ctx.fillStyle = backgroundColor;
    //         ctx.fillRect(0, 0, canvas.width, canvas.height);
    //
    //         ctx.fillStyle = fontColor;
    //         ctx.font = `${fontSize}px ${selectedValue}`;
    //         ctx.textAlign = 'center';
    //
    //         ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    //
    //         // Görüntüyü kaydet
    //         const link = document.createElement("a");
    //         link.download = `${platform.name.replace(" ", "_")}.png`;
    //         link.href = canvas.toDataURL();
    //         link.click();
    //     }
    // };

    const handleSave = async () => {
        try {
            // Canvas oluşturma
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Platform boyutlarını kullan
            canvas.width = platform.width;
            canvas.height = platform.height;

            // Font boyutunu kesin sayıya çevir
            const fontSize = parseInt(fontNumber);

            // Arka plan ayarları
            if (backgroundImage) {
                // Resmi yükleme
                const img = await new Promise((resolve, reject) => {
                    const image = new Image();
                    image.onload = () => resolve(image);
                    image.onerror = reject;
                    image.src = backgroundImage;
                });

                // Resmi canvas'a çizme
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            } else {
                // Arka plan rengini doldurma
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Metin ayarları
            ctx.fillStyle = fontColor;
            ctx.font = `${fontSize}px ${selectedValue}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Metni çizme
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);

            // Görüntüyü kaydetme
            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

            // Dosya kaydetme
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${platform.name.replace(" ", "_")}.png`;

            // Mobil ve PWA için uyumlu kaydetme
            if (navigator.msSaveBlob) {
                // IE10+
                navigator.msSaveBlob(blob, link.download);
            } else if ('download' in link) {
                // Modern tarayıcılar
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                // Diğer tarayıcılar için geri dönüş
                window.open(link.href, '_blank');
            }

            // Bellek temizliği
            URL.revokeObjectURL(link.href);

        } catch (error) {
            console.error("Resim kaydetme hatası:", error);
            alert("Resim kaydedilemedi. Lütfen tekrar deneyin.");
        }
    };


    return (
        <section className="w-full  bg-[#252525] pt-4 mt-16 mb-14">
            <div className="container justify-center flex flex-col  ">
                <div
                    className="w-full overflow-x-scroll lg:overflow-hidden  my-4 flex items-center justify-between  pl-4 ">
                    <Select value={selectedValue} onChange={handleSelect} size="small"
                            className="w-full bg-white xs:w-full  sm:w-full  md:w-1/3 lg:w-1/6 mx-2 my-4  ">
                        <MenuItem value="Host Grotesk" style={{fontFamily: "Host Grotesk"}}>
                            Host Grotesk
                        </MenuItem>
                        <MenuItem value="Roboto" style={{fontFamily: "Roboto"}}>
                            Roboto
                        </MenuItem>
                        <MenuItem value="Open Sans" style={{fontFamily: "Open Sans"}}>
                            Open Sans
                        </MenuItem>
                        <MenuItem value="Exo" style={{fontFamily: "Exo"}}>
                            Exo
                        </MenuItem>
                        <MenuItem value="Poppins" style={{fontFamily: "Poppins"}}>
                            Poppins
                        </MenuItem>
                        <MenuItem value="Montserrat" style={{fontFamily: "Montserrat"}}>
                            Montserrat
                        </MenuItem>
                        <MenuItem value="Inter" style={{fontFamily: "Inter"}}>
                            Inter
                        </MenuItem>
                    </Select>

                    <div className="flex flex-row">

                        <Button onClick={() => toggleStyle("bold")}>
                            <FormatBoldIcon/>
                        </Button>

                        <Button onClick={() => toggleStyle("italic")}>
                            <FormatItalicIcon/>
                        </Button>

                        <Button onClick={() => toggleStyle("underline")}>
                            <FormatUnderlinedIcon/>
                        </Button>

                        <Button onClick={() => handleAlignment("left")}>
                            <FormatAlignLeftIcon/>
                        </Button>

                        <Button onClick={() => handleAlignment("center")}>
                            <FormatAlignCenterIcon/>
                        </Button>

                        <Button onClick={() => handleAlignment("right")}>
                            <FormatAlignRightIcon/>
                        </Button>

                        <Button onClick={handleTextColor}>
                            <FormatColorTextIcon style={{color: fontColor === "#ffffff" ? "#000" : fontColor}}/>
                        </Button>

                        {showColorPicker && (
                            <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)}
                                   className="cursor-pointer mx-4 flex items-center justify-center appearance-none"
                                   style={{
                                       border: `2px solid ${fontColor}`,
                                       backgroundColor: fontColor,
                                       WebkitAppearance: "none",
                                       margin: "auto 0px 0px 5px"
                                   }}
                            />

                        )}

                        <Button onClick={handleBackgroundColor} style={{
                            backgroundColor: backgroundColor
                        }}>
                            <BrushIcon style={{
                                color: isWhiteBackground(backgroundColor) ? "#000" : "#fff",
                            }}/>
                        </Button>

                        {showBGPicker && (
                            <input type="color" value={backgroundColor}
                                   onChange={(e) => setBackgroundColor(e.target.value)}
                                   className="flex cursor-pointer p-0 items-center justify-center appearance-none"
                                   style={{
                                       backgroundColor: backgroundColor,
                                       WebkitAppearance: "none",
                                       margin: "auto 0px 0px 5px",
                                   }}/>)}

                        <Button onClick={handleImageClick}>
                            <ImageIcon/>
                        </Button>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{display: "none"}} //
                        />

                    </div>

                    <div className="flex flex-row items-center justify-center">
                        <Inputfield type="number" value={fontNumber} onChange={(e) => setFontNumber(e.target.value)}
                                    min={1} max={500} className="w-16 ml-4"/>
                        <span className="ml-1 mr-2 text-white">px</span>
                    </div>

                </div>


                <div className="w-full text-white  flex flex-col ">
                    <h2 className="text-xl mt-4 my-2 mx-4">{platform.name.replace(/[0-9x]/g, "")} Designer</h2>
                    <Label title="Enter a Text: "/>

                    <textarea
                        className=" w-3/4 xs:w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/4 resize-none outline-0 px-2 py-2 transition duration-150 ease-in-out  border border-[#ced4da] focus:border-[#00b6fd] focus:shadow-custom rounded-md mx-4 my-4 text-black "
                        value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a text" rows={4}/>


                </div>
                <div className="w-full my-4">
                    <h2 className="text-lg mx-4 text-white">Preview</h2>
                    <div
                        className="w-full aspect-[3/2] max-w-[600px] rounded-lg flex items-center justify-center relative overflow-hidden bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
                            backgroundColor: backgroundColor,
                        }}>
                        <Draggable axis="both"
                                   defaultPosition={{x: 0, y: 0}}>
                            <div className="cursor-move w-full flex absolute" style={{
                                fontFamily: selectedValue,
                                fontWeight: textStyles.bold ? "bold" : "normal",
                                fontStyle: textStyles.italic ? "italic" : "normal",
                                textDecoration: textStyles.underline ? "underline" : "none",
                                color: fontColor,
                                fontSize: `${fontNumber}px`,
                                justifyContent:
                                    alignment === "left" ? "flex-start" :
                                        alignment === "right" ? "flex-end" : "center",
                            }}>

                                <p className="m-0 whitespace-pre-wrap w-fit" style={{
                                    textAlign: alignment,
                                }}>
                                    {text}
                                </p>

                            </div>
                        </Draggable>

                    </div>
                    <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-4 py-2 my-4 rounded hover:bg-green-600"
                    >
                        Save as Image
                    </button>
                </div>


            </div>


        </section>
    );
}