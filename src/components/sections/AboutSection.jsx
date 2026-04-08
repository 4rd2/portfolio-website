const AboutSection = () => {
  return (
    <div className="flex flex-col gap-3 text-sm leading-7">
      <div className="text-[#1e6a8a]">&gt; cat EMPLOYEE_FILE.txt</div>
      <div className="flex flex-col gap-1 pl-4">
        <div><span className="text-[#1e6a8a]">NAME          :</span> FORD MEDLEY</div>
        <div><span className="text-[#1e6a8a]">DEGREE        :</span> B.S. COMPUTER SCIENCE &amp; ENGINEERING</div>
        <div><span className="text-[#1e6a8a]">INSTITUTION   :</span> THE OHIO STATE UNIVERSITY</div>
        <div><span className="text-[#1e6a8a]">SPECIALIZATION:</span> ARTIFICIAL INTELLIGENCE</div>
        <div><span className="text-[#1e6a8a]">STATUS        :</span> JUNIOR</div>
      </div>

      <div className="text-[#1e6a8a] mt-2">&gt; RESEARCH INTERESTS</div>
      <div className="flex flex-col gap-1 pl-4">
        <div>— COMPUTER VISION</div>
        <div>— WEB DEVELOPMENT</div>
        <div>— QUANTUM COMPUTING</div>
      </div>

      <div className="text-[#1e6a8a] mt-2">&gt; ACTIVITIES</div>
      <div className="flex flex-col gap-1 pl-4">
        <div>— COLLABORATIVE SOFTWARE DEVELOPMENT CLUB</div>
        <div>— UNDERGRADUATE RESEARCHER</div>
      </div>

      <div className="text-[#1e6a8a] mt-2">&gt; PERSONAL</div>
      <div className="flex flex-col gap-1 pl-4">
        <div>— CODING, CLIMBING, WORKING OUT</div>
        <div>— KIRBY FIGURE COLLECTING</div>
      </div>
    </div>
  );
};

export default AboutSection;
