/* eslint-disable quotes */
/*
  This example requires some changes to your config:
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { ChevronRightIcon, StarIcon } from "@heroicons/react/20/solid";
import {
  InboxIcon,
  SparklesIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Landing() {
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-0">
          <div>
            <div />
            <div className="mt-20">
              <div>
                <a href="/" className="inline-flex space-x-4">
                  <span className="rounded bg-indigo-50 px-2.5 py-1 text-sm font-semibold text-indigo-600">
                    What's new
                  </span>
                  <span className="inline-flex items-center space-x-1 text-sm font-medium text-indigo-600">
                    <span>Just shipped version 0.1.0</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Server management for growing teams
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="/"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                  >
                    Live demo
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="flex flex-shrink-0 pr-5">
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">
                      Rated 5 stars
                    </span>{" "}
                    by over{" "}
                    <span className="font-medium text-indigo-600">
                      500 beta users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
              <img
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-white pt-16 pb-32">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Stay on top of customer support
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare
                    iaculis bibendum malesuada faucibus lacinia porttitor.
                    Pulvinar laoreet sagittis viverra duis. In venenatis sem
                    arcu pretium pharetra at. Lectus viverra dui tellus ornare
                    pharetra.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/"
                      className="inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Better understand your customers
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare
                    iaculis bibendum malesuada faucibus lacinia porttitor.
                    Pulvinar laoreet sagittis viverra duis. In venenatis sem
                    arcu pretium pharetra at. Lectus viverra dui tellus ornare
                    pharetra.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/"
                      className="inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-white pt-16 pb-32">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                    <InboxIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Stay on top of customer support
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare
                    iaculis bibendum malesuada faucibus lacinia porttitor.
                    Pulvinar laoreet sagittis viverra duis. In venenatis sem
                    arcu pretium pharetra at. Lectus viverra dui tellus ornare
                    pharetra.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/"
                      className="inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;Cras velit quis eros eget rhoncus lacus ultrices
                      sed diam. Sit orci risus aenean curabitur donec aliquet.
                      Mi venenatis in euismod ut.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                          alt=""
                        />
                      </div>
                      <div className="text-base font-medium text-gray-700">
                        Marcia Hill, Digital Marketing Manager
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                    <SparklesIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Better understand your customers
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare
                    iaculis bibendum malesuada faucibus lacinia porttitor.
                    Pulvinar laoreet sagittis viverra duis. In venenatis sem
                    arcu pretium pharetra at. Lectus viverra dui tellus ornare
                    pharetra.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/"
                      className="inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-indigo-700 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 rounded-lg mt-16 shadow-x">
        <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Boost your productivity.</span>
            <span className="block">Start using our app today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </div>
    </div>
  );
}
