const DefaultPagesParent = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div
			className="
            h-full w-full 
            flex flex-col 
            sm:justify-start md:justify-start  items-start
            overflow-auto 
            gap-x-[20px] gap-y-[15px] 
            px-[25px] pt-[10px] pb-[20px]
        "
		>
			{children}
		</div>
	);
};

export default DefaultPagesParent;
