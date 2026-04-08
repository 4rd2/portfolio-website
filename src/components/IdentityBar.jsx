const IdentityBar = () => {
  return (
    <div className="mx-4 mt-2 shrink-0 border border-[#1a4a6a] relative bg-[#040f1c]" style={{ height: "36px" }}>
      {/* Progress fill — 75% */}
      <div
        className="absolute top-0 left-0 h-full bg-[#4fc3f7]/10"
        style={{ width: "75%" }}
      />
      {/* Name */}
      <div className="absolute inset-0 flex items-center pl-3">
        <span className="text-[#87dfff] text-lg font-bold tracking-[0.2em] lumon-glow">FORD MEDLEY</span>
      </div>
      {/* 75% label — centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[#4fc3f7] text-xs tracking-wider lumon-glow-dim">DEGREE 75% COMPLETE</span>
      </div>
      {/* OSU — right side */}
      <div className="absolute inset-0 flex items-center justify-end pr-3">
        <span className="text-[#87dfff] text-lg font-bold tracking-[0.2em] lumon-glow">OSU</span>
      </div>
    </div>
  );
};

export default IdentityBar;
