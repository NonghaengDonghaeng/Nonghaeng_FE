"use client";
import { useState, useEffect } from "react";
import { addExperienceDataType } from "@/app/(_route)/admin/(types)/adminDataType";
import { inputType } from "@/common/types/eventType";
import axios from "axios";

export default function Page() {
  const [addExperienceData, setAddExperienceData] = useState<
    addExperienceDataType
  >({
    experience_type: "",
    experience_name: "",
    start_date: "",
    end_date: "",
    min_participant: 0, // Assuming this is a number field
    max_participant: 0, // Assuming this is a number field
    price: 0, // Assuming this is a number field
    duration_hours: 0, // Assuming this is a number field
    check_point: "",
    summary: "",
    detail_introduction: "",
    supplies: "",
    precautions: "",
    exp_round_dto_list: [{ start_time: "", end_time: "", max_participant: 0 }],
  });

  const ExperienceType = {
    RURAL: { code: "1", name: "농촌체험" },
    CRAFTING: { code: "2", name: "만들기체험" },
    CULTURE: { code: "3", name: "문화체험" },
    LEISURE_SPORTS: { code: "4", name: "레포츠체험" },
    ETC: { code: "5", name: "그 외" },
  };

  useEffect(() => {
    console.log(addExperienceData);
  }, [addExperienceData]);

  const handleChange = (e: inputType) => {
    const { name, value } = e.target;
    let newValue =
      e.target.type === "date" ? formatDate(e.target.valueAsDate) : value;
    newValue = e.target.type === "time" ? formatTime(value) : value;
    setAddExperienceData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const formatTime = (time: any) => {
    const [hours, minutes] = time.split(":");
    return `${hours}:${minutes}`;
  };

  const formatDate = (date: any) => {
    if (!date) return ""; // Return empty string if date is null or undefined

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleEpisodeChange = (index: any, e: inputType) => {
    const { name, value } = e.target;
    const episodes = [...addExperienceData.exp_round_dto_list];
    // episodes[index][name] = value;
    setAddExperienceData((prevData) => ({
      ...prevData,
      exp_round_dto_list: episodes,
    }));
  };

  const handleAddEpisode = () => {
    setAddExperienceData((prevData) => ({
      ...prevData,
      exp_round_dto_list: [
        ...prevData.exp_round_dto_list,
        { start_time: "", end_time: "", max_participant: 0 },
      ],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", addExperienceData);
    addExperience();
  };

  const addExperience = async () => {
    try {
      const token = localStorage.getItem("jwt");
      console.log(token);
      const response = await axios.post(
        "http://localhost:8080/experiences/seller/add",
        addExperienceData,
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
      <h1 className="text-lg m-3">체험 등록하기</h1>
      <article>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2 m-1">
            <p className="space-x-3">
              <label className="text-sm">체험 이름</label>
              <input
                name="experience_name"
                value={addExperienceData.experience_name}
                onChange={handleChange}
              />
            </p>
            <p className="space-x-3">
              <label className="text-sm">체험 유형</label>
              {/* Replace with your own logic for selecting experience type */}
              <select
                name="experience_type"
                value={addExperienceData.experience_type}
                onChange={() => handleChange}
              >
                <option value="">체험 유형 선택</option>
                {Object.values(ExperienceType).map((type) => (
                  <option key={type.code} value={type.code}>
                    {type.name}
                  </option>
                ))}
              </select>
            </p>
            {/* Add other fields */}
            <p className="space-x-3">
              <label className="text-sm">시작 날짜</label>
              <input
                type="date"
                name="start_date"
                value={addExperienceData.start_date}
                onChange={handleChange}
              />
            </p>
            <p className="space-x-3">
              <label className="text-sm">마감 날짜</label>
              <input
                type="date"
                name="end_date"
                value={addExperienceData.end_date}
                onChange={handleChange}
              />
            </p>
            <p className="space-x-3">
              <label className="text-sm">최소인원</label>
              <input
                name="min_participant"
                value={addExperienceData.min_participant}
                onChange={handleChange}
              />
            </p>
            <p className="space-x-3">
              <label className="text-sm">최대인원</label>
              <input
                name="max_participant"
                value={addExperienceData.max_participant}
                onChange={handleChange}
              />
            </p>
            <p className="space-x-3">
              <label className="text-sm">가격</label>
              <input
                name="price"
                value={addExperienceData.price}
                onChange={handleChange}
              />
            </p>
            <p className="space-x-3">
              <label className="text-sm">체험 소모시간</label>
              <input
                name="duration_hours"
                value={addExperienceData.duration_hours}
                onChange={handleChange}
              />
            </p>
            <p className="space-x-3">
              <label className="text-sm">체크포인트</label>
              <input
                name="check_point"
                value={addExperienceData.check_point}
                onChange={handleChange}
              />
            </p>
            <p className="space-x-3">
              <label className="text-sm">요약</label>
              <input
                name="summary"
                value={addExperienceData.summary}
                onChange={handleChange}
              />
            </p>
            <p className="space-x-3">
              <label className="text-sm">상세소개</label>
              <input
                name="detail_introduction"
                value={addExperienceData.detail_introduction}
                onChange={handleChange}
              />
            </p>
            <p className="space-x-3">
              <label className="text-sm">준비물</label>
              <input
                name="supplies"
                value={addExperienceData.supplies}
                onChange={handleChange}
              />
            </p>
            <p className="space-x-3">
              <label className="text-sm">주의사항</label>
              <input
                name="precautions"
                value={addExperienceData.precautions}
                onChange={handleChange}
              />
            </p>
            <div>
              {addExperienceData.exp_round_dto_list.map((episode, index) => (
                <div key={index} className="flex space-x-2">
                  <div>
                    <label className="text-sm">시작 시간</label>
                    <input
                      name="start_time"
                      type="time"
                      value={episode.start_time}
                      onChange={(e) => handleEpisodeChange(index, e)}
                    />
                  </div>
                  <div>
                    <label className="text-sm">종료 시간</label>
                    <input
                      name="end_time"
                      type="time"
                      value={episode.end_time}
                      onChange={(e) => handleEpisodeChange(index, e)}
                    />
                  </div>
                  <div>
                    <label className="text-sm">최대 참가자 수</label>
                    <input
                      type="number"
                      name="max_participant"
                      value={episode.max_participant}
                      onChange={(e) => handleEpisodeChange(index, e)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              className="rounded-lg bg-green text-white m-2"
              type="button"
              onClick={handleAddEpisode}
            >
              회차 추가
            </button>
          </div>
          <button className="rounded-lg bg-green text-white m-2" type="submit">
            체험 등록하기
          </button>
        </form>
      </article>
    </section>
  );
}
