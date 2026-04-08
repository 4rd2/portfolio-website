const CONTACTS = [
  { id: "01", label: "GITHUB",          url: "https://github.com/4rd2" },
  { id: "02", label: "FRONTEND MENTOR", url: "https://www.frontendmentor.io/profile/4rd2" },
  { id: "03", label: "LINKEDIN",        url: "https://www.linkedin.com/in/Ford-Medley/" },
];

const ContactsSection = () => {
  return (
    <div className="flex flex-col gap-3 text-sm leading-7">
      <div className="text-[#1e6a8a]">&gt; cat COMMUNICATION_CHANNELS.txt</div>
      <div className="flex flex-col gap-2 pl-4 mt-1">
        {CONTACTS.map((c) => (
          <div key={c.id} className="flex items-baseline gap-3">
            <span className="text-[#1e6a8a] shrink-0">[{c.id}]</span>
            <span className="text-[#4fc3f7] w-36 shrink-0">{c.label}</span>
            <span className="text-[#1e6a8a]">→</span>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4fc3f7] hover:text-[#87dfff] transition-colors duration-150 break-all"
            >
              {c.url}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsSection;
