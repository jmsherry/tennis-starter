import React from "react";
import { useParams } from "react-router-dom";
import MemberForm from "../components/forms/MemberForm";
import { useSelector } from "react-redux";
import { selectMembers } from "./../features/members/membersSlice";

function UpdateMember() {
  const { id } = useParams();
  console.log("🚀 ~ file: UpdateMember.jsx ~ line 7 ~ UpdateMember ~ id", id);
  const members = useSelector(selectMembers);
  const member = members.find(({ _id }) => _id === id);
  console.log("🚀 ~ file: UpdateMember.jsx ~ line 12 ~ UpdateMember ~ member", member)

  return (
    <>
      <h1>Update Member</h1>
      {member ? (
        <MemberForm member={member} />
      ) : (
        <p>Cannot find member with id {id}</p>
      )}
    </>
  );
}

export default UpdateMember;
