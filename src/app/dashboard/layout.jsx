import MainContent from '@/components/dashboard/MainContent';

import { FaArrowLeft, FaChartLine, FaFile, FaListAlt, FaPen, FaUsers } from 'react-icons/fa';


const layout = ({children}) => {
    
  





    return (
        <div className="drawer h-full lg:drawer-open bg-white">
            <label htmlFor="my-drawer-2" className="btn btn-primary  absolute  drawer-button lg:hidden top-0 text-white">

<FaArrowLeft/> Open Tab
</label>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">

                {children}
                

            </div>
           <MainContent></MainContent>
        </div>
    );
};

export default layout;  