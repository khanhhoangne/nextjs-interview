"use client";

import React, { useState } from "react";

interface VotingProps {
  voting: {
    like: number;
    heart: number;
    struck: number;
    hushed: number;
    yawning: number;
    angry: number;
  };
}

function Voting({ voting }: VotingProps) {
  const [selected, setSelected] = useState<keyof VotingProps["voting"] | null>(null);
  const [votes, setVotes] = useState(voting);

  const handleVote = (type: keyof VotingProps["voting"]) => {
    if (selected === type) return; // Nếu chọn lại cùng một cái, không làm gì cả

    setVotes((prev) => {
      const newVotes = { ...prev };
      if (selected) newVotes[selected] -= 1; // Giảm 1 ở lựa chọn trước
      newVotes[type] += 1; // Tăng 1 ở lựa chọn mới
      return newVotes;
    });

    setSelected(type);
  };

  return (
    <div>
      <div className="text-center font-extrabold">Bạn thấy bài viết như thế nào</div>
      <div className="flex justify-center gap-15 mt-5">
        {[
          { key: "like", label: "Hữu ích", image: "/thumbs-up.png" },
          { key: "heart", label: "Yêu thích", image: "/green heart.png" },
          { key: "struck", label: "Thú vị", image: "/star-struck.png" },
          { key: "hushed", label: "Bất ngờ", image: "/hushed face.png" },
          { key: "yawning", label: "Nhàm chán", image: "/yawning face.png" },
          { key: "angry", label: "Tức giận", image: "/pouting face.png" },
        ].map(({ key, label, image }) => (
          <div
            key={key}
            className={`flex flex-col items-center px-5 py-3 cursor-pointer ${
              selected === key ? "border-2 border-[#10805B]" : ""
            }`}
            onClick={() => handleVote(key as keyof VotingProps["voting"])}
          >
            <div>
              <img src={image} alt={label} />
            </div>
            <div>{votes[key as keyof VotingProps["voting"]]}</div>
            <div>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Voting;
