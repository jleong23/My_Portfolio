import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
  return(
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Passionate <span className="text-primary">Web Developer</span></h3>

            <p className="text-muted-foreground">With over 3 Years of experience. I specialize in building responsive and user-friendly web applications using modern technologies.</p>

            <p className="text-muted-foreground">I'm a web developer with a passion for creating beautiful and functional websites. I'm a quick learner and I'm always looking to improve my skills.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch</a>

              <a href="#resume" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text">Creating responsive website.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text">Designing intuitive user interfaces and seamless user experience.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text">Leading projects from conception to completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};