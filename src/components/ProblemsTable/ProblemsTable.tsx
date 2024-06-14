import React from "react";
import { problems } from "../mockProblems/Problems";
import { BsCheckCircle } from "react-icons/bs";
import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";

type ProblemsTableProps = {

};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
    return (
        <tbody className='text-white'>
            {problems.map((doc, ind) => {
                const difficulyColor = doc.difficulty === "Easy" ? "text-dark-green-s" : doc.difficulty === "Medium" ? "text-dark-yellow" : "text-dark-pink";
                function setYoutubePlayer(arg0: { isOpen: boolean; videoId: string; }): void {
                    throw new Error("Function not implemented.");
                }

                return (
                    <tr className={`${ind % 2 == 1 ? 'bg-dark-layer-1' : ''}`} key={doc.id} >
                        <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                            <BsCheckCircle fontSize={"18"} width="18" />
                        </th>
                            {/* title */}
                            <td className="px-6 py-4">
                                <Link className="hover:text-blue-600 cursor-pointer" href={`/problems/${doc.id}`}>
                                {doc.title}
                                </Link>
                            </td>
                            {/* difficulty */}
                            <td className="px-6 py-4 ${difficulyColor}`}>{problem.difficulty}">
                                {doc.difficulty}
                            </td>
                            {/* category */}
                            <td className={"px-6 py-4"}>
                                {doc.category}
                            </td>
                            {/* video */}
							<td className={"px-6 py-4"}>
								{doc.videoId ? (
									<AiFillYoutube
										fontSize={"28"}
										className='cursor-pointer hover:text-red-600'
										onClick={() =>
											setYoutubePlayer({ isOpen: true, videoId: doc.videoId as string })
										}
									/>
								) : (
									<p className='text-gray-400'>Coming soon</p>
								)}
							</td>
                    </tr>
                )
            })
            }
        </tbody >
    )
}

export default ProblemsTable;