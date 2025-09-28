
import Link from "next/link"
import { basePath } from '../../util/config';

export default function Blog1() {


	return (
		<>

			<section id="blog" className="section-blog-1 position-relative pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Recent blog</h3>
							<span className="fs-5 fw-medium text-200"> Here are some of my latest blog posts where I share insights, tips, and experiences from my journey in software development.</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/blog-list" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								View more
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-8">
						<div className="col-lg-4">
							<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
								<div className="blog-card__image position-relative">
									<div className="zoom-img rounded-3 overflow-hidden">
										<img className="w-100" src={`${basePath}/assets/imgs/blog/blog-1/blog-sc.png`} alt="" />
										<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Development</Link>
										<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
											<i className="ri-arrow-right-up-line text-dark" />
										</Link>
									</div>
								</div>
								<div className="blog-card__content position-relative text-center mt-4">
									<span className="blog-card__date fs-7">Jan 31, 2025 • 3 min read</span>
									<h5 className="blog-card__title">Writing tests using jest</h5>
									<p className="blog-card__description fs-6">Writing unit tests helps ensure that all code meets quality standards</p>
									<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
								<div className="blog-card__image position-relative">
									<div className="zoom-img rounded-3 overflow-hidden">
										<img className="w-100" src={`${basePath}/assets/imgs/blog/blog-1/blog2-sc.png`} alt="" />
										<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Development</Link>
										<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
											<i className="ri-arrow-right-up-line text-dark" />
										</Link>
									</div>
								</div>
								<div className="blog-card__content position-relative text-center mt-4">
									<span className="blog-card__date fs-7">Oct 1, 2017 • 3 min read</span>
									<h5 className="blog-card__title">About Meteor.js</h5>
									<p className="blog-card__description fs-6">Fullstack Web Application development with full stack Javascript framework, Meteor</p>
									<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
