const Footer = () => {
  return (
    <footer className="bg-white antialiased dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="py-6 md:py-8">
          <div className="gap-4 space-y-5  xl:space-y-0 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024{' '}
              <a href="#" className="hover:underline">
                Bootcamp front-end
              </a>
              , Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
