import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Timer from "../Timer/timer";
// import { problems } from "../mockProblems/Problems";
// import { Problem } from "@/utils/types/problem";
import { useRouter } from "next/router";
import { problems } from "../../utils/problems";
import { Problem } from "@/utils/types/problem";
type TopbarProps = {
	problemsPage?: boolean;
};

const TopbarProps: React.FC<TopbarProps> = ({ problemsPage }) => {
	const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
	const router = useRouter();
	const handleProblemChange = (isForward: boolean) => {

		const { order } = (problems[router.query.pid as string] as Problem);
		const direction = isForward ? 1 : -1;
		const nextProblemOrder = order + direction;
		const nextProblemKey = Object.keys(problems).find((key) => problems[key].order === nextProblemOrder);

		if (isForward && !nextProblemKey) {
			const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
			router.push(`/problems/${firstProblemKey}`);
		} else if (!isForward && !nextProblemKey) {
			const lastProblemKey = Object.keys(problems).find(
				(key) => problems[key].order === Object.keys(problems).length
			);
			router.push(`/problems/${lastProblemKey}`);
		} else {
			router.push(`/problems/${nextProblemKey}`);
		}
	};

	return (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between ${!problemsPage ? "max-w-[1200px] mx-auto" : ""}`}>
				<Link href='/' className='h-[22px] flex-1'>
					<img src='/logo-full.png' alt='Logo' className='h-full' />
				</Link>
				{problemsPage && (
					<div className='flex items-center gap-4 flex-1 justify-center'>
						<div
							className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
							onClick={() => handleProblemChange(false)}
						>
							<FaChevronLeft />
						</div>
						<Link
							href='/'
							className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
						>
							<div>
								<BsList />
							</div>
							<p>Problem List</p>
						</Link>
						<div
							className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
							onClick={() => handleProblemChange(true)}
						>
							<FaChevronRight />
						</div>
					</div>
				)}
				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<div>
						<a
							href="https://buymeacoffee.com/singhvikram"
							target="_blank"
							rel="noreferrer"
							className="flex items-center bg-dark-fill-3 py-2 px-4 sm:py-1.5 sm:px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2 transition-all duration-200"
						>
							<img
								src="/Coffee.png"
								alt="Buy me a coffee"
								className="w-6 h-6 sm:w-5 sm:h-5 inline-block mr-2"
							/>
							<span className="text-sm sm:text-base">Buy me a coffee</span>
						</a>

					</div>
					{!user && (
						<Link
							href='/auth' onClick={() => {
								setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }));
							}}>
							<button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded '>Sign In</button>
						</Link>
					)}
					{user && problemsPage && <Timer />}
					{user && (
						<div className='cursor-pointer group relative'>
							<img src='/avatar.png' alt='Avatar' width={30} height={30} className='rounded-full' />
							<div
								className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out'
							>
								<p className='text-sm'>{user.email}</p>
							</div>
						</div>
					)}
					{user && <Logout />}
				</div>
			</div>
		</nav>


	);
};
export default TopbarProps;
