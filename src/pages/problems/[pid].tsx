import Workspace from "@/components/Workspace/Workspace";
import Topbar from '@/components/Topbar/topbar';
import React from 'react';
// import { problems } from "@/components/mockProblems/Problems";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
type ProblemPageProps = {
    problem:Problem
};

const ProblemPage: React.FC<ProblemPageProps> = ({problem}) => {
    console.log(problem);
    
    return ( 
    <div>
        <Topbar problemsPage />
        <Workspace problem={problem}/>
    </div>
    );
};
export default ProblemPage;

//fetch the local data 
//SSG 
//getStaticPaths => create dynamic routes

export async function getStaticPaths() {
    const paths = Object.keys(problems).map((key)=> ({
        params: { pid: key }
    }));

    return {
        paths,
        fallback: false,
    };
}

//getStaticPaths => fetches data
export async function getStaticProps({ params }:{params: {pid:string}}) {
    const {pid} = params;
    const problem = problems[pid];

    if(!problem) {
        return {
            notFound: true,
        }
    }
problem.handlerFunction = problem.handlerFunction.toString();
    return {
        props:{
            problem
        }
    }
}