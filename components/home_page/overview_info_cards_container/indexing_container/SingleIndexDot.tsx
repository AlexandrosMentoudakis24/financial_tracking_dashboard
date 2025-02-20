"use client";

const SingleIndexDot = ({ isActive }: { isActive: boolean }) => {
	const dotColor = isActive ? "bg-primary_color" : "bg-gray-300";

	return <div className={`h-[7px] w-[7px] rounded-full ${dotColor} p-[5px]`} />;
};

export default SingleIndexDot;
