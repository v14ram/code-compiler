import Workspace from "@/components/Workspace/Workspace";
import Topbar from '@/components/Topbar/topbar';
import React from 'react';
import { problems } from "@/components/mockProblems/Problems";

type ProblemPageProps = {

};

const ProblemPage: React.FC<ProblemPageProps> = () => {

    return <div>
        <Topbar problemsPage />
        <Workspace />
    </div>
}
export default ProblemPage;

export async function getStaticPaths() {
    const paths = Object.keys(problems).map((key)=> ({
        params: { pid: key }
    }))

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }:{params: {pid:number}}) {
    const {pid} = params;
    const problem = problems[pid];

    if(!problem) {
        return {
            notFound: true,
        }
    }

    return {
        props:{
            problem
        }
    }
}