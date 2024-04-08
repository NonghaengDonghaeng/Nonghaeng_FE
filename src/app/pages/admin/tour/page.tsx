"use client";
import { useState, useEffect } from "react";
import { addTourDataType } from "@/types/adminDataType";
import { inputType } from "@/types/eventtype";
import axios from "axios";

export default function page() {
  const [addTourDate, setAddTourDate] = useState<addTourDataType>({
    tour_type: "",
    tour_name: "",
    homepage_url: "",
    introduction: "",
    one_line_intro: "",
    summary: "",
    restaurant: "",
    parking: "",
    toilet: "",
    amenities: "",
  });

  enum TourType {
    VILLAGE,
    EDUCATION_FARM,
    TOURIST_FARM,
    FANCH,
    BED_BREAKFAST,
  }
  const TOUR_TYPE_CODE: { [key in TourType]: string } = {
    [TourType.VILLAGE]: "1",
    [TourType.EDUCATION_FARM]: "2",
    [TourType.TOURIST_FARM]: "3",
    [TourType.FANCH]: "4",
    [TourType.BED_BREAKFAST]: "5",
  };

  useEffect(() => {
    console.log(addTourDate);
  }, [addTourDate]);

  const handleChange = (e: inputType) => {
    const { name, value } = e.target;
    setAddTourDate((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", addTourDate);
    addTour();
  };

  const addTour = async () => {
    try {
      const token = localStorage.getItem("jwt");
      console.log(token);
      const response = await axios.post(
        "http://localhost:8080/tours/seller/add",
        addTourDate,
        {
          headers: { Authorization: token },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1 className="text-lg m-3">관광 등록하기</h1>
      <article>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2 m-1">
            <p className="space-x-3">
              <label className="text-sm">관광이름</label>
              <input
                name="tour_name"
                value={addTourDate.tour_name}
                onChange={handleChange}
              ></input>
            </p>
            <p className="space-x-3">
              <label className="text-sm">관광유형</label>
              <select
                name="tour_type"
                value={addTourDate.tour_type}
                onChange={handleChange}
              >
                <option value="">선택해주세요</option>
                <option value={TOUR_TYPE_CODE[TourType.VILLAGE]}>
                  농촌체험휴양마을
                </option>
                <option value={TOUR_TYPE_CODE[TourType.EDUCATION_FARM]}>
                  농촌교육농장
                </option>
                <option value={TOUR_TYPE_CODE[TourType.TOURIST_FARM]}>
                  우수관광농원
                </option>
                <option>낙농체험목장</option>
              </select>
            </p>
            <p className="space-x-3">
              <label className="text-sm">소개글</label>
              <input
                name="introduction"
                value={addTourDate.introduction}
                onChange={handleChange}
              ></input>
            </p>
            <p className="space-x-3">
              <label className="text-sm">homepage_url</label>
              <input
                name="homepage_url"
                value={addTourDate.homepage_url}
                onChange={handleChange}
              ></input>
            </p>
            <p className="space-x-3">
              <label className="text-sm">one_line_intro</label>
              <input
                name="one_line_intro"
                value={addTourDate.one_line_intro}
                onChange={handleChange}
              ></input>
            </p>
            <p className="space-x-3">
              <label className="text-sm">summary</label>
              <input
                name="summary"
                value={addTourDate.summary}
                onChange={handleChange}
              ></input>
            </p>
            <p className="space-x-3">
              <label className="text-sm">restaurant</label>
              <input
                name="restaurant"
                value={addTourDate.restaurant}
                onChange={handleChange}
              ></input>
            </p>
            <p className="space-x-3">
              <label className="text-sm">parking</label>
              <input
                name="parking"
                value={addTourDate.parking}
                onChange={handleChange}
              ></input>
            </p>
            <p className="space-x-3">
              <label className="text-sm">toilet</label>
              <input
                name="toilet"
                value={addTourDate.toilet}
                onChange={handleChange}
              ></input>
            </p>
            <p className="space-x-3">
              <label className="text-sm">amenities</label>
              <input
                name="amenities"
                value={addTourDate.amenities}
                onChange={handleChange}
              ></input>
            </p>
          </div>
          <button className="rounded-lg bg-green text-white m-2" type="submit">
            관광 등록하기
          </button>
        </form>
      </article>
    </section>
  );
}
