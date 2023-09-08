/**
 * Preview and Editor tab component
 */
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import './index.css';
import { useContext } from 'react';
import { ChatContext } from '@/app/chat-context';

export default function ModeTab() {
  const { isContract, setIsContract } = useContext(ChatContext);
  return (
    <div
      className={`relative w-56 h-10 mx-auto p-2 flex justify-center items-center bg-[#ece9e0] rounded-3xl model-tab dark:text-violet-600 z-10 ${
        isContract ? 'editor-tab' : ''
      }`}
    >
      <div
        className="z-10 w-[50%] text-center cursor-pointer"
        onClick={() => {
          setIsContract(false);
        }}
      >
        <span>Preview</span>
        <AutoAwesomeIcon className="ml-1" />
      </div>
      <div
        className="z-10 w-[50%] text-center cursor-pointer"
        onClick={() => {
          setIsContract(true);
        }}
      >
        <span>Editor</span>
        <DashboardIcon className="ml-1" />
      </div>
    </div>
  );
}