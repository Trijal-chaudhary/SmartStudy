import React, { useState } from "react";
import "./Question.css";
import { motion } from "framer-motion";
const Questions = () => {
  const [renderand, setRenderAns] = useState(false);
  return (
    <div className="QuestionOuterCont">
      <div className="QuesDetExtraCont">
        <h4>1st-Year</h4>
        <h4>Mathematics-I</h4>
        <h4>Unit-I</h4>
      </div>
      <div className="questionInteraction"></div>
      <div className="QuestionCOntOut">
        <div className="quest">
          <div className="questionOuterCard">
            <img
              src="https://res.cloudinary.com/dluw75knc/image/upload/v1770573931/Screenshot_2026-02-08_233141_gsjlnl.png"
              alt=""
            />
          </div>
          <div className="quesDetOuterInner">
            <div className="buttonsOrIcons">
              <h4>Year: 2024</h4>
            </div>
            <div className="buttonsOrIcons">
              <h4>Sem: Odd</h4>
            </div>
            <div className="buttonsOrIcons">
              <h4>Marks: 7</h4>
            </div>
            <div className="buttonsOrIcons">
              <h4>Level: 8</h4>
            </div>
            <div className="uploadAnsFromStudent buttonsOrIcons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z" />
              </svg>
              <h4>Upload Answer</h4>
            </div>
          </div>
          <div className="answerOuterBox">
            <h4>AI-Solution</h4>
            <div className="hahaha">
              {!renderand ? (
                <svg
                  className="downImgArrow"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  onClick={() => setRenderAns((prev) => !prev)}
                >
                  <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                </svg>
              ) : (
                <svg
                  className="downImgArrow"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  onClick={() => setRenderAns((prev) => !prev)}
                >
                  <path d="M297.4 201.4C309.9 188.9 330.2 188.9 342.7 201.4L502.7 361.4C515.2 373.9 515.2 394.2 502.7 406.7C490.2 419.2 469.9 419.2 457.4 406.7L320 269.3L182.6 406.6C170.1 419.1 149.8 419.1 137.3 406.6C124.8 394.1 124.8 373.8 137.3 361.3L297.3 201.3z" />
                </svg>
              )}
            </div>

            <motion.div
              initial={{
                height: 0,
              }}
              animate={
                renderand
                  ? {
                      height: "auto",
                    }
                  : {}
              }
              transition={{
                duration: 0.9,
              }}
              className="outermotionuper"
            >
              <img
                src="https://res.cloudinary.com/dluw75knc/image/upload/v1770573859/d42ed173-d1cb-4ad7-ae97-e20a28529ef6.png"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
