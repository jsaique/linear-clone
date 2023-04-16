import Link from "next/link";
import Container from "./container";
import { FooterIcon } from "./icons/footericon";
import { TwitterIcon } from "./icons/twitter";
import { GitHubIcon } from "./icons/github";
import { SlackIcon } from "./icons/slack";

const footerLink = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integration", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
      { title: "Report a vulnerability", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-white-a08 py-[5.6rem] mt-12 text-sm ">
    <Container className="flex flex-col justify-between md:flex-row">
      <div>
        <div className="flex flex-row justify-between h-full lg:flex-col">
          <div className="flex items-center text-grey hover:text-white duration-300 text-md">
            <FooterIcon />
            <p className="ml-3">Linear - Designed worldwide</p>
          </div>
          <div className="mt-auto flex gap-4">
            <TwitterIcon />
            <GitHubIcon />
            <SlackIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLink.map((column) => (
          <div className="min-w-[50%] lg:min-w-[18rem] mt-10 lg:mt-0">
            <h3 className="font-medium mb-3">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li className="[&_a]:last:mb-0">
                  <Link
                    className="text-grey mb-3 block hover:text-white transition-colors"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
