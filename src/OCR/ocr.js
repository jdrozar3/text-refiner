import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createWorker } from 'tesseract.js';
import { Button, Row, Col, Container, Dropdown, Form } from 'react-bootstrap';
import Speech from 'react-speech';
import RangeSlider from 'react-bootstrap-range-slider';
import Webcam from "react-webcam";





function OCR() {
    const [font, setFont] = useState("");
    const [value, setValue] = useState(18);
    const [lineHeight, setLineHeight] = useState(40);
    const [letterSpacing, setLetterSpacing] = useState(2);
    const [fontWeight, setFontWeight] = useState(100);
    const [checked, setChecked] = useState(false);
    const [speed, setSpeed] = useState(0.6);

    const handleChange = () => {
        if (checked) {
            setChecked(false);
        } else {
            setChecked(true);
        }
    }

    const styles = {
        play: {
            button: {
                width: '28',
                height: '28',
                cursor: 'pointer',
                pointerEvents: 'none',
                outline: 'none',
                backgroundColor: 'yellow',
                border: 'solid 1px rgba(255,255,255,1)',
                borderRadius: 6
            },
        }
    };




    //Capture Camera
    const webcamRef = useRef(null);
    const [img, setImg] = useState(null);
    const capture = useCallback(() => {
        const src = webcamRef.current.getScreenshot();
        setImg(src);
    }, [webcamRef, setImg]);

    //upload a picture
    const onDrop = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]));
    }

    //tesseract.js (OCR)
    const worker = createWorker({
        logger: m => console.log(m),
    });
    const doOCR = async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(img);
        setOcr(text);
    };
    const [ocr, setOcr] = useState('Recognizing...');
    useEffect(() => {
        doOCR();
    });


    return (
        <>
            <h1>Image-Text-Speech Reader</h1>
            <hr></hr>
            {/****************************************Capture Image**************************************/}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Row>
                    <Col sm={12}>
                        <Row>
                            <Container>
                                <p>Image Capture is only for devices with back camera</p>
                                <Row>
                                    <Webcam
                                        ref={webcamRef}
                                        audio={false}
                                        screenshotFormat="image/jpeg"
                                        screenshotQuality={1}
                                        videoConstraints={{
                                            width: 700,
                                            height: 400
                                        }}
                                    />
                                    {img && (
                                        <img
                                            src={img}
                                            width="200px"
                                            height="200px"
                                        />

                                    )}
                                </Row>
                            </Container>

                        </Row>
                        <div style={{ display: "flex", justifyContent: "center", paddingTop: "2%" }}>

                            <Row>
                                <Button variant="outline-dark" onClick={capture}>Capture</Button>
                            </Row>

                        </div>

                    </Col>

                </Row>
            </div>
            <br></br>
            <h6 className="text-muted">OR</h6>
            <hr></hr>
            {/****************************************Upload Image**************************************/}


            <Row>
                <Col>
                    <p>Upload Image</p>
                    <input type="file" onChange={onDrop} />
                </Col>
            </Row>
            <br></br>
            <hr></hr>

            {/****************************************Set Font Style**************************************/}
            <div style={{ backgroundColor: "rgb(255, 240, 154)", padding: "2%", width: "1000px" }}>
                <Row>
                    <Col sm={8}>
                        <Container>
                            <Row>
                                <p>Font size</p>
                                <RangeSlider
                                    value={value}
                                    min={12}
                                    max={40}
                                    variant='warning'
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                />
                                <Col sm={1}></Col>
                                <p>Line Height</p>
                                <RangeSlider
                                    value={lineHeight}
                                    min={10}
                                    max={200}
                                    variant='warning'
                                    onChange={changeEvent => setLineHeight(changeEvent.target.value)}
                                />
                            </Row>
                        </Container>
                    </Col>

                    <Col sm={4}>
                        <Container>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                    Font Family
                         </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => {
                                        setFont("Arial, Helvetica, sans-serif")
                                    }}>Arial</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        setFont("Verdana, sans-serif")
                                    }}>Verdana Sans</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        setFont("Geneva, sans-serif")
                                    }}>Geneva</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        setFont("Tahoma, sans-serif")
                                    }}>Tahoma</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Container>
                    </Col>
                </Row>

                <br></br>
                <Row>
                    <Col sm={8}>
                        <Container>
                            <Row>
                                <p>Letter Spacing</p>
                                <RangeSlider
                                    value={letterSpacing}
                                    min={1}
                                    max={10}
                                    variant='warning'
                                    onChange={changeEvent => setLetterSpacing(changeEvent.target.value)}
                                />
                                <Col sm={1}></Col>
                                <p>Font Weight</p>
                                <RangeSlider
                                    value={fontWeight}
                                    min={100}
                                    max={900}
                                    variant='warning'
                                    onChange={changeEvent => setFontWeight(changeEvent.target.value)}
                                />
                                <Col sm={1}></Col>
                                <p>Speech speed</p>
                                <RangeSlider
                                    value={speed}
                                    min={0.5}
                                    step={0.1}
                                    max={1}
                                    variant='warning'
                                    onChange={changeEvent => setSpeed(changeEvent.target.value)}
                                />
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    {/****************************************Text-to-Speech**************************************/}

                    <Container>
                        <Speech
                            style={styles}
                            rate={speed}
                            text={ocr}
                            textAsButton={true}
                            displayText="Text-to-Speech"
                        />
                    </Container>
                </Row>
                <br></br>
                <Row>
                    <Form.Check
                        label="Enable Editor to paste text to the editor. Disable it to use image capture/upload"
                        onChange={handleChange}
                    />

                </Row>

                {/****************************************Text**************************************/}
                <br></br>
                <Row >
                    <Col sm={12}>
                        <Container>
                            <div>{checked ?
                                <textarea style={{
                                    overflow: "scroll",
                                    letterSpacing: `${letterSpacing}px`,
                                    fontFamily: font,
                                    fontSize: `${value}px`,
                                    fontWeight: `${fontWeight}`,
                                    lineHeight: `${lineHeight}px`
                                }} rows={40} cols={90} spellCheck="true"
                                    onChange={(e) => {
                                        setOcr(e.target.value);
                                    }}></textarea> :

                                <textarea style={{
                                    letterSpacing: `${letterSpacing}px`,
                                    fontFamily: font,
                                    fontSize: `${value}px`,
                                    fontWeight: `${fontWeight}`,
                                    lineHeight: `${lineHeight}px`
                                }} rows={40} cols={90} spellCheck="true" value={ocr}></textarea>

                            }
                            </div>
                        </Container>
                    </Col>





                </Row>

            </div>

        </>
    );
}


export default OCR;
