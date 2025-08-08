function AboutMe() {
  return (
    <div className="flex-col md:w-[90%]">
      <div className="flex flex-col items-center gap-1 lg:flex lg:items-start">
        <p className="text-3xl text-left w-full font-bold text-white text-shadow-neutral-500 text-shadow-sm">
          Hello,
        </p>
        <p className="pb-[4%] text-3xl text-left w-full font-bold text-white text-shadow-neutral-500 text-shadow-sm">
          I&#39;m Gilson de Almeida
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 text-justify text-white lg:items-start">
        <p className="">
          I&#39;m a full-stack developer with a strong foundation in React and
          Node.js, committed to building thoughtful and efficient web
          applications.
        </p>
        <p className="">
          Over time, I&#39;ve invested in honing my skills through self-directed
          learning, online courses, and hands-on personal projects. I&#39;m always
          eager to contribute to meaningful work, collaborate with inspiring
          teams, and continue growing as a developer.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
