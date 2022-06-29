from setuptools import setup, find_packages

setup(
    author="Thanh Hau Nguyen",
    author_email='thanhhau097@gmail.com',
    python_requires='>=3.6',
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
    ],
    description="Nocode AI with IncreAI",
    entry_points={
        'console_scripts': [
            'increai=increai.cli:main',
        ],
    },
    # install_requires=requirements,
    license="MIT license",
    # long_description=readme + '\n\n' + history,
    include_package_data=True,
    keywords='increai',
    name='increai',
    packages=find_packages(include=['increai', 'increai.*']),
    test_suite='tests',
    # tests_require=test_requirements,
    url='https://github.com/ranuzz/increai',
    version='0.1.5',
    zip_safe=False
)