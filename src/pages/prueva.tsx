<div className="flex flex-col items-start text-white">
                {/* Email */}
                <motion.button
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1.7,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center"
                  style={{
                    backdropFilter: "blur(10px)",
                    borderColor: "#3B82F6",
                  }}
                  onClick={() =>
                    (window.location.href = "mailto:ortizmichel390@gmail.com")
                  }
                >
                  <img
                    src={emailIcon}
                    alt="Email"
                    className="h-16 w-16 md:h-18 md:w-18 mr-8"
                  />
                  <span className="text-sm md:text-lg">
                    ortizmichel390@gmail.com
                  </span>
                </motion.button>

                {/* LinkedIn */}
                <motion.button
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1.9,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center"
                  style={{
                    backdropFilter: "blur(10px)",
                    borderColor: "#3B82F6",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/miguel-ortiz-9736b32a5/",
                      "_blank"
                    )
                  }
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="h-16 w-16 md:h-18 md:w-18 mr-8"
                  />
                  <span className="text-sm md:text-lg">LinkedIn</span>
                </motion.button>

                {/* GitHub */}
                <motion.button
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 2.2,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center"
                  style={{
                    backdropFilter: "blur(10px)",
                    borderColor: "#3B82F6",
                  }}
                  onClick={() =>
                    window.open("https://github.com/mikiortiz", "_blank")
                  }
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="h-16 w-16 md:h-18 md:w-18 mr-8"
                  />
                  <span className="text-sm md:text-lg">GitHub</span>
                </motion.button>

                {/* WhatsApp */}
                <motion.button
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 2.5,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="bg-black bg-opacity-5 rounded-lg z-10 flex items-center"
                  style={{
                    backdropFilter: "blur(10px)",
                    borderColor: "#3B82F6",
                  }}
                  onClick={() =>
                    window.open(
                      "https://wa.me/+2622517454?text=" +
                        encodeURIComponent(
                          "¡Hola! Soy Miguel Ortiz, un apasionado Full Stack Developer. 🚀 Si tienes una idea, un proyecto o simplemente quieres hablar de tecnología, mándame un mensaje. ¡Estoy listo para ayudarte!"
                        ),
                      "_blank"
                    )
                  }
                >
                  <img
                    src={phoneIcon}
                    alt="WhatsApp"
                    className="h-16 w-16 md:h-18 md:w-18 mr-8"
                  />
                  <span className="text-sm md:text-lg">WhatsApp</span>
                </motion.button>
              </div>