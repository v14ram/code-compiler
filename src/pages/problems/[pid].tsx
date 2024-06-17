import Workspace from "@/components/Workspace/Workspace";
import Topbar from '@/components/Topbar/topbar';
import React from 'react';

type ProblemPageProps = {
    
};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    
    return <div>
        <Topbar problemsPage/>
        <Workspace/>
    </div>
}
export default ProblemPage;