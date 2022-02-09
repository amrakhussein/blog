import Socials from './Socials';

export default function ConnectSocials() {
  return (
    <>
      <div className="flex flex-row justify-between px-2 py-3 sm:px-4 ">
        <div className="mt-[-0.3rem]">
          <h3>
            <span className="font-extrabold">@</span> amromoorie
          </h3>
          <a
            className=" text-slate-300"
            href="https://amromoorie.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            amromoorie.com
          </a>
        </div>

        <Socials />
      </div>
    </>
  );
}
