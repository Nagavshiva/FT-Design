import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
	{
		title: 'Web Design',
		icon: <MdWeb className="w-full h-full" />,
		description:
			' We love creative and design with passion of building epic web experiences to blow peoples minds.',
	},
	{
		title: 'Ui Design',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'We tend to be distracted by the voices in our own heads telling us what the design should look like',
	},
	{
		title: 'Web Development',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Google Analytics is the best friend of all Digital Marketers as it dictates the decision making and success of every websites.',
	},
];