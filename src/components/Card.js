import React, { useState } from "react";
import "./Card.css";

import colors from "../assets/colors";

import HeartFillIcon from "../assets/images/heartFill.svg";
import HeartOutlineIcon from "../assets/images/heartOutline.svg";
import EditScore from "../assets/images/editScore.svg";
import Medal from "../assets/images/medal.svg";
import Triangle from "../assets/images/triangle.svg";
import ShareIcon from "../assets/images/share.svg";
import UserIcon from "../assets/images/user.svg";

const Card = ({ data }) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClickHeart = () => {
    setIsFilled(!isFilled);
  };

  const handleClickEditScore = () => {
    console.log("handleClickEditScore");
  };

  const handleClickShare = () => {
    console.log("handleClickShare");
  };

  const handleClickRatioScore = () => {
    console.log("handleClickRatioScore");
  };

  return (
    <div className="card-shadow bg-white rounded-[5px] p-5 w-[442px] h-[493px] flex flex-col gap-3">
      {/* Header Section */}
      <div className="flex mb-3">
        {/* logo */}
        <div className="w-[100px] h-[100px]  flex justify-center items-center mr-3">
          <img src={data.logo} alt="Icon" className="w-[80px] h-[86px]" />
        </div>

        <div className="p-2 justify-between flex flex-col flex-1">
          <div>
            <div className="flex justify-between">
              {/* faculty */}
              <div
                style={{ color: colors.grapefruit }}
                className="font-semibold text-[24px] leading-[16px]"
              >
                {data.faculty.name}
              </div>
              <button onClick={handleClickHeart}>
                <img
                  src={isFilled ? HeartFillIcon : HeartOutlineIcon}
                  alt="Heart Icon"
                />
              </button>
            </div>

            {/* field */}
            <div
              style={{ color: colors.warmGrey }}
              className="font-medium text-[20px] leading-[16px]  mt-2 truncate max-w-[290px] "
            >
              {data.name}
            </div>
          </div>

          {/* university */}
          <div
            style={{ color: colors.warmGrey }}
            className="font-light text-[20px] leading-[16px] "
          >
            {data.faculty.university.name}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t" style={{ color: colors.divider }} />

      {/* Rounds Section */}
      <div className="p-1 flex items-center ">
        <div
          style={{ color: colors.textRound }}
          className="font-light text-[20px] leading-[20.2px] mr-3"
        >
          รอบที่เปิด
        </div>

        {data.roundSeats.map((round, index) => {
          return (
            <div
              key={`${index}_${round}`}
              style={{
                color: colors.white,
                backgroundColor:
                  round > 0
                    ? colors.roundsSectionActive
                    : colors.roundsSectionDisable,
              }}
              className="w-[30px] h-[30px] rounded-full mr-2 flex items-center justify-center font-medium text-[18.4px]"
            >
              {index + 1}
            </div>
          );
        })}
      </div>

      {data.score ? (
        <>
          {/* Current Round Section */}
          <div className="flex justify-between items-center">
            <span
              style={{ color: colors.grapefruit }}
              className="font-semibold text-[16px] leading-[16px]"
            >
              รอบที่ 4 : Admission
            </span>
            <button
              style={{
                color: colors.grapefruit,
                borderColor: colors.grapefruit,
              }}
              className="px-5 py-2 rounded-[17.5px] border flex justify-center items-center gap-3"
              onClick={handleClickEditScore}
            >
              แก้ไขคะแนน
              <img src={EditScore} alt="Edit Score Icon" />
            </button>
          </div>

          {/* User's Score */}
          <div className="flex justify-between py-4">
            <img src={Medal} alt="Medal Icon" className="px-10" />

            <div
              style={{ color: colors.text }}
              className="font-light text-[12px] leading-[16px] text-end"
            >
              คะแนนของคุณคือ
              <div className="text-[42px] leading-[42px]">23,453</div>
            </div>
          </div>

          {/* Score Information Section */}
          <div
            className="flex justify-between font-light leading-[16.8px]"
            style={{ color: colors.textRound }}
          >
            {/* Minimum Score */}
            <div className="flex items-center">
              <div className="flex flex-col px-5 items-center">
                <div className="text-[19.6px]">
                  {data.score.min.toLocaleString()}
                </div>
                <div className="text-[11.2px]">
                  คะแนนต่ำสุด {data.score.year % 100}
                </div>
              </div>
              <div
                className="border-l h-[29px] mx-2"
                style={{ borderColor: colors.divider }}
              ></div>
            </div>

            {/* Average Score */}
            <div className="flex items-center">
              <div className="flex flex-col px-5 items-center">
                <div className="text-[19.6px]">
                  {data.score.avg.toLocaleString()}
                </div>
                <div className="text-[11.2px]">
                  คะแนนเฉลี่ย {data.score.year % 100}
                </div>
              </div>
              <div
                className="border-l h-[29px] mx-2"
                style={{ borderColor: colors.divider }}
              ></div>
            </div>

            {/* Maximum Score */}
            <div className="flex items-center">
              <div className="flex flex-col px-5 items-center">
                <div className="text-[19.6px]">
                  {data.score.max.toLocaleString()}
                </div>
                <div className="text-[11.2px]">
                  คะแนนสูงสุด {data.score.year % 100}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t" style={{ color: colors.divider }} />

          {/* Ratio */}
          <div className="flex justify-between items-center">
            <button
              style={{ color: colors.ratioScore }}
              className="font-light text-[16px] leading-[16px] flex items-center"
              onClick={handleClickRatioScore}
            >
              <img
                src={Triangle}
                alt="Triangle Icon"
                className="w-[9px] h-[14px] mr-5"
              />
              ดูสัดส่วนคะแนน
            </button>
          </div>
        </>
      ) : (
        <div
          style={{ backgroundColor: colors.divider }}
          className="flex grow items-center justify-center rounded-lg "
        >
          No data
        </div>
      )}

      {/* Divider */}
      <hr className="border-t" style={{ color: colors.divider }} />

      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={UserIcon}
            alt="User Icon"
            className="w-[10px] h-[10px] mr-1"
          />
          <div
            style={{ color: colors.warmGrey }}
            className="font-light text-[12px] leading-[15px]"
          >
            {data.likes.toLocaleString()}
            <span className="ml-1 italic">คนที่สนใจ</span>
          </div>
        </div>

        <button onClick={handleClickShare}>
          <img src={ShareIcon} alt="Share Icon" className="w-[18px] h-[23px]" />
        </button>
      </div>
    </div>
  );
};

export default Card;
