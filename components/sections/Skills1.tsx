'use client'
import Link from "next/link"
import CountUp from 'react-countup'
export default function Skills1() {
	return (
		<>

			<section className="section-skills-1 position-relative section-padding bg-900">
				<div className="container">
					<div className="row">
						<div className="text-center mb-7">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">My Skills</h3>
							<span className="fs-5 fw-medium text-200">
							Over the years, I’ve worked with a variety of modern tools and technologies to build responsive web and mobile applications. 
							<br /> Below are the key skills I use to bring ideas to life
							</span>
						</div>
						<div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/csharp.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={90} />%</h3>
									<p className="text-400 fw-medium text-uppercase">C#</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/net_core.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={85} />%</h3>
									<p className="text-400 fw-medium text-uppercase">.NET_Core</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/react.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={90} />%</h3>
									<p className="text-400 fw-medium text-uppercase">React.js</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/node.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={88} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Node.js </p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/next.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={80} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Next.js</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/postgres.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={80} />%</h3>
									<p className="text-400 fw-medium text-uppercase">PostgreSQL</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/mssql.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={95} />%</h3>
									<p className="text-400 fw-medium text-uppercase">MSSQL</p>
								</div>
							</div>
						</div>
						<div className="text-center">
							<p className="fs-5 text-200 mb-0">In addition, I have experience in mobile development such as: </p>
							<div className="d-flex justify-content-center gap-1">
								<Link href="/#" className="fs-5 fw-bold">React Native</Link>
								<Link href="/#" className="fs-5 fw-bold">Flutter</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
