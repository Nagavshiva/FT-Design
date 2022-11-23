import React from 'react';

function WorkItem({ imgUrl, title,  }) {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a
			target="_blank"
			rel="noreferrer"
			className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden  ml-7"
		>
			<img
				src={imgUrl}
				alt="work"
				className="w-full h-36 md:h-48 object-cover"
			/>
			<div className="w-full p-5 text-gray-600 dark:text-gray-300 ">
				<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
					{title}
				</h3>
			</div>
		</a>
	);
}

export default WorkItem;