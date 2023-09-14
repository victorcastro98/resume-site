const SpeechBubble = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col animate-bounce">
      <div className="w-fit bg-primary rounded-lg p-4">
        <p className="text-gray-200">{text}</p>
      </div>
      <div className="flex flex-row w-full">
        <div className="w-[70%]" />
        <div
          className="border-solid w-[4px] h-[6px] border-t-primary 
      border-t-8 border-x-transparent border-x-8 border-b-0"
        />
      </div>
    </div>
  );
};

export default SpeechBubble;
