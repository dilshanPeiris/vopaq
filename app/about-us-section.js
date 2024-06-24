'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, ButtonGroup } from "@nextui-org/button";

import aboutusStyles from './styles/about-us-section.module.css';


import aboutUsImage from './resources/images/about-us.png';

export default function AboutUs() {



    return (
        <div className={aboutusStyles.mainContainer}>
            <div className={aboutusStyles.sectionTitle}>
                <div>
                    About Us
                </div>
            </div>
            <div className={aboutusStyles.subContainer}>
                <div className={aboutusStyles.subContainerLeft}>
                    <div className={aboutusStyles.subContainerContent}>
                        <div className={aboutusStyles.subContainerTitleText}>
                            Who We Are?
                        </div>
                        <div className={aboutusStyles.subContainerDescription}>
                            <div className={aboutusStyles.subContainerDescriptionTitle}>
                                We are
                            </div>
                            <div className={aboutusStyles.subContainerDescriptionImage}>
                                <svg width="185" height="90" viewBox="0 0 185 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M105.957 35.4534C106.273 35.4523 106.589 35.4512 106.914 35.4501C107.965 35.4471 109.017 35.4474 110.068 35.4478C110.825 35.4464 111.581 35.4448 112.338 35.4429C114.388 35.4387 116.438 35.4375 118.488 35.4372C119.769 35.4369 121.05 35.4359 122.331 35.4346C126.801 35.4301 131.271 35.4282 135.742 35.4285C139.908 35.4288 144.074 35.4237 148.24 35.4161C151.819 35.4098 155.398 35.4072 158.976 35.4075C161.113 35.4077 163.25 35.4063 165.387 35.4012C167.395 35.3965 169.403 35.3965 171.412 35.4C172.149 35.4005 172.885 35.3994 173.622 35.3964C174.628 35.3927 175.634 35.395 176.641 35.3987C177.203 35.3984 177.766 35.3981 178.346 35.3979C179.868 35.5201 180.905 35.7688 182.25 36.4822C183.468 38.3084 183.431 39.1322 183.215 41.3036C182.695 42.6435 181.998 43.8423 181.256 45.0703C181.059 45.4064 180.862 45.7425 180.659 46.0888C175.381 54.9923 175.381 54.9923 170.197 57.2143C168.128 57.6431 166.162 57.757 164.052 57.7577C163.737 57.7584 163.422 57.7592 163.098 57.76C162.05 57.7619 161.002 57.7604 159.954 57.7588C159.199 57.7595 158.445 57.7603 157.691 57.7614C155.648 57.7636 153.605 57.7627 151.562 57.7612C149.424 57.76 147.287 57.7611 145.149 57.7619C141.561 57.7628 137.973 57.7616 134.386 57.7593C130.234 57.7567 126.083 57.7575 121.931 57.7602C118.368 57.7624 114.804 57.7627 111.24 57.7614C109.112 57.7607 106.983 57.7606 104.854 57.7622C102.855 57.7636 100.855 57.7626 98.8561 57.7598C98.121 57.7592 97.3859 57.7594 96.6508 57.7604C95.6505 57.7617 94.6503 57.7601 93.65 57.7577C92.8089 57.7574 92.8089 57.7574 91.9509 57.7571C90.6431 57.6964 90.6431 57.6964 89.6788 57.2143C89.5664 57.5182 89.4539 57.8221 89.338 58.1353C88.7146 59.1429 88.7146 59.1429 87.6844 59.593C84.7613 60.1704 83.0915 60.2362 80.5181 58.6607C80.2994 58.3425 80.0806 58.0243 79.8552 57.6964C78.9201 56.5456 78.3612 56.4323 76.9623 56.0089C74.226 55.1707 72.6258 54.067 71.2067 51.5491C70.1214 49.157 69.8907 47.1151 70.7453 44.6108C72.0134 41.8159 73.8133 40.0844 76.661 38.8929C80.2271 38.4548 83.3556 38.6637 86.3038 40.8214C88.5255 42.8092 88.7794 45.2258 89.1967 48.0536C89.5168 47.5247 89.8369 46.9958 90.1666 46.4508C90.5965 45.7495 91.0265 45.0483 91.4567 44.3471C91.6665 43.9994 91.8763 43.6516 92.0924 43.2934C94.1364 39.9776 96.2977 37.7223 99.8038 36C101.872 35.5561 103.846 35.4564 105.957 35.4534ZM76.9623 43.7143C75.4679 45.4222 75.1743 46.2809 75.2146 48.5357C75.8723 49.9453 76.5296 50.8151 77.6253 51.9107C79.2692 52.5044 79.9216 52.4377 81.5728 51.7902C83.0272 51.0149 83.0272 51.0149 83.8931 49.5C84.1052 47.309 84.1746 46.1721 83.1398 44.2266C80.993 42.4101 79.3684 42.2885 76.9623 43.7143ZM85.0684 54.5625C84.6805 54.9603 84.2927 55.3581 83.8931 55.7679C85.6208 56.2511 85.6208 56.2511 87.2681 55.7679C87.109 54.9723 86.9499 54.1768 86.786 53.3572C86.0737 53.301 86.0737 53.301 85.0684 54.5625Z" fill="#030303" />
                                    <path d="M72.3213 9.48214C73.9941 10.8649 75.5749 12.3217 77.1428 13.8214C77.4746 14.1173 77.8065 14.4131 78.1485 14.7179C83.9434 20.0776 87.2463 27.505 89.1963 35.0357C89.2566 36.6931 89.2566 36.6931 89.1963 37.9286C89.0372 37.9286 88.8781 37.9286 88.7142 37.9286C88.6197 37.496 88.5252 37.0634 88.4279 36.6177C87.2433 31.6751 85.4021 27.4132 82.9285 22.9821C82.7066 22.5763 82.4847 22.1704 82.2561 21.7523C78.0846 14.8586 70.5518 8.53287 62.6785 6.58928C62.0942 6.42707 61.51 6.26485 60.9081 6.09772C49.0166 2.81055 37.4531 3.44707 26.5208 9.40539C17.0722 14.8644 9.30395 23.491 6.34945 34.1572C5.97816 35.5703 5.634 36.9875 5.30348 38.4107C6.73544 38.5698 8.16741 38.7289 9.64276 38.8929C10.9156 42.3932 12.1885 45.8936 13.4999 49.5C14.7728 45.9996 16.0456 42.4993 17.357 38.8929C18.9481 38.8929 20.5392 38.8929 22.1785 38.8929C21.8861 41.0773 21.3161 42.9572 20.506 45.0044C20.3902 45.2988 20.2743 45.5932 20.1549 45.8965C19.9114 46.5133 19.6666 47.1296 19.4205 47.7453C19.0428 48.6909 18.6695 49.6381 18.2969 50.5858C16.4658 55.2127 16.4658 55.2127 15.9106 55.7679C14.1604 55.7679 12.4103 55.7679 10.607 55.7679C8.85687 51.1537 7.10669 46.5396 5.30348 41.7857C5.14437 41.7857 4.98526 41.7857 4.82134 41.7857C4.45323 52.0382 6.35657 61.8235 12.5356 70.2321C12.852 70.6722 13.1683 71.1122 13.4943 71.5656C20.1843 80.3225 30.6924 85.462 41.5094 86.9207C51.7787 87.9374 60.6666 85.6407 69.5829 80.5285C70.8749 79.875 70.8749 79.875 72.3213 79.875C66.899 84.2582 60.3046 86.7014 53.5178 88.0714C52.9673 88.1948 52.9673 88.1948 52.4058 88.3206C45.3961 89.5779 37.5565 88.9787 30.857 86.625C30.3406 86.4448 29.8241 86.2645 29.292 86.0788C25.8338 84.7484 22.8052 82.9454 19.7678 80.8393C19.0676 80.3722 19.0676 80.3722 18.3534 79.8957C9.17274 73.4609 3.1935 63.6097 1.20903 52.5925C-0.527131 39.4946 2.58005 27.9176 10.5166 17.3772C17.2234 8.73888 27.3846 3.18162 38.0892 1.28571C38.5441 1.19808 38.9991 1.11045 39.4678 1.02016C50.9707 -0.62516 63.0295 2.55289 72.3213 9.48214ZM37.607 2.25C37.607 2.40911 37.607 2.56821 37.607 2.73214C42.2212 2.57303 46.8353 2.41393 51.5892 2.25C51.5892 2.09089 51.5892 1.93178 51.5892 1.76786C49.7108 1.75382 47.8325 1.74527 45.9541 1.73772C45.1566 1.73166 45.1566 1.73166 44.3429 1.72548C43.8286 1.72393 43.3143 1.72237 42.7844 1.72077C42.3123 1.71825 41.8401 1.71572 41.3537 1.71312C40.0541 1.76637 38.8725 1.95814 37.607 2.25ZM52.5535 2.25C54.482 2.73214 54.482 2.73214 54.482 2.73214L52.5535 2.25ZM33.7499 3.69643C35.4205 3.45777 35.4205 3.45777 37.1249 3.21428C35.4442 2.63475 35.3507 2.62926 33.7499 3.69643Z" fill="#D2BD79" />
                                    <path d="M72.3218 9.48213C73.9946 10.8649 75.5754 12.3217 77.1433 13.8214C77.4752 14.1173 77.8071 14.4131 78.149 14.7179C83.9439 20.0776 87.2468 27.505 89.1968 35.0357C89.2571 36.6931 89.2571 36.6931 89.1968 37.9286C89.0377 37.9286 88.8786 37.9286 88.7147 37.9286C88.6202 37.496 88.5258 37.0634 88.4284 36.6177C87.2438 31.6751 85.4026 27.4132 82.929 22.9821C82.7071 22.5763 82.4852 22.1704 82.2566 21.7523C78.0851 14.8586 70.5524 8.53285 62.679 6.58927C62.0948 6.42705 61.5105 6.26484 60.9086 6.09771C49.0171 2.81053 37.4536 3.44705 26.5213 9.40538C15.7235 15.6439 8.882 25.0937 5.30399 36.9643C4.82667 36.9643 4.34935 36.9643 3.85756 36.9643C3.85756 36.6461 3.85756 36.3278 3.85756 36C3.38024 36 2.90292 36 2.41113 36C2.92136 28.5506 6.4452 22.4374 11.0897 16.7143C11.3986 16.3153 11.7075 15.9162 12.0257 15.5051C26.5243 -2.04718 54.5604 -3.76324 72.3218 9.48213ZM37.6076 2.24998C37.6076 2.40909 37.6076 2.5682 37.6076 2.73213C42.2217 2.57302 46.8358 2.41391 51.5897 2.24998C51.5897 2.09088 51.5897 1.93177 51.5897 1.76784C49.7114 1.75381 47.833 1.74526 45.9547 1.73771C45.1571 1.73165 45.1571 1.73165 44.3434 1.72546C43.8291 1.72391 43.3148 1.72236 42.7849 1.72076C42.3128 1.71823 41.8406 1.71571 41.3542 1.7131C40.0546 1.76635 38.873 1.95812 37.6076 2.24998ZM52.554 2.24998C54.4826 2.73213 54.4826 2.73213 54.4826 2.73213L52.554 2.24998ZM33.7504 3.69641C35.421 3.45775 35.421 3.45775 37.1254 3.21427C35.4448 2.63473 35.3512 2.62924 33.7504 3.69641Z" fill="#BDA15A" />
                                    <path d="M83.6144 39.2413C85.6575 40.1899 86.9992 41.3083 88.2324 43.2321C89.075 45.76 89.2779 48.6211 88.2437 51.1197C87.1658 52.8788 85.922 54.393 84.3753 55.7679C85.6481 55.6088 86.921 55.4496 88.2324 55.2857C88.7097 55.9221 89.1871 56.5586 89.6788 57.2143C89.338 58.1353 89.338 58.1353 88.7146 59.1429C86.5636 60.0827 84.2103 60.4311 81.9947 59.5647C80.5181 58.6607 80.5181 58.6607 79.8552 57.6964C78.9201 56.5455 78.3612 56.4323 76.9623 56.0089C74.226 55.1707 72.6258 54.067 71.2067 51.5491C70.1214 49.157 69.8907 47.1151 70.7453 44.6108C73.1408 39.331 78.139 37.6075 83.6144 39.2413ZM76.9623 43.7143C75.4679 45.4222 75.1743 46.2809 75.2146 48.5357C75.8723 49.9452 76.5296 50.8151 77.6253 51.9107C79.2692 52.5044 79.9216 52.4377 81.5728 51.7902C83.0272 51.0148 83.0272 51.0148 83.8931 49.5C84.1052 47.309 84.1746 46.1721 83.1398 44.2266C80.993 42.41 79.3684 42.2884 76.9623 43.7143Z" fill="#E6C067" />
                                    <path d="M34.3134 39.2225C36.5539 40.4145 38.4311 42.2774 39.4456 44.6183C39.7485 48.0521 39.7014 50.5001 37.6074 53.3572C35.0406 55.7632 32.5783 56.4351 29.1096 56.3838C26.4524 56.0735 24.4137 54.8286 22.6911 52.8148C20.8112 50.1943 20.9267 47.8452 21.2145 44.6786C22.0182 42.0838 23.6972 40.6688 26.036 39.375C28.6141 38.5156 31.703 38.3994 34.3134 39.2225ZM27.0002 44.1965C25.8184 45.9692 25.6386 47.4409 26.036 49.5C27.0662 50.8451 27.8786 51.6445 29.411 52.3628C31.0683 52.4146 32.2616 51.7657 33.6297 50.8862C34.6067 49.4207 34.7717 47.847 34.7145 46.125C34.1109 44.6637 33.6371 43.9643 32.334 43.0815C30.0933 42.3346 28.8207 42.903 27.0002 44.1965Z" fill="#E6C067" />
                                    <path d="M59.7861 38.8928C61.5363 38.8928 63.2865 38.8928 65.0897 38.8928C66.0532 41.1402 67.0145 43.3884 67.9736 45.6376C68.3004 46.403 68.6278 47.1681 68.9558 47.933C69.4265 49.0309 69.8951 50.1298 70.3631 51.2289C70.5108 51.5719 70.6584 51.915 70.8106 52.2684C71.8397 54.6937 71.8397 54.6937 71.8397 55.7678C70.0895 55.7678 68.3393 55.7678 66.5361 55.7678C66.2179 54.9723 65.8997 54.1768 65.5718 53.3571C62.2306 53.1184 62.2306 53.1184 58.8218 52.875C58.5036 53.8296 58.1854 54.7843 57.8576 55.7678C56.2665 55.7678 54.6754 55.7678 53.0361 55.7678C54.2048 52.0384 55.685 48.4796 57.2247 44.8895C57.4712 44.3112 57.7176 43.7328 57.9715 43.137C58.5749 41.7216 59.1798 40.3069 59.7861 38.8928ZM62.1968 44.1964C61.5604 45.9466 60.924 47.6968 60.2683 49.5C61.5411 49.5 62.814 49.5 64.1254 49.5C63.8016 47.6648 63.2925 45.9552 62.679 44.1964C62.5199 44.1964 62.3608 44.1964 62.1968 44.1964Z" fill="#E6C067" />
                                    <path d="M2.41033 32.625C2.86077 34.0764 2.91393 34.4892 2.41033 36C2.88765 36 3.36497 36 3.85676 36C3.85676 36.3182 3.85676 36.6364 3.85676 36.9643C4.33408 36.9643 4.8114 36.9643 5.30319 36.9643C5.30319 37.4416 5.30319 37.9189 5.30319 38.4107C6.73515 38.5698 8.16712 38.7289 9.64248 38.8929C10.9153 42.3932 12.1882 45.8936 13.4996 49.5C14.7725 45.9996 16.0453 42.4993 17.3568 38.8929C18.9478 38.8929 20.5389 38.8929 22.1782 38.8929C21.8858 41.0773 21.3159 42.9572 20.5058 45.0044C20.3899 45.2988 20.274 45.5932 20.1546 45.8965C19.9111 46.5133 19.6663 47.1296 19.4202 47.7453C19.0425 48.6909 18.6692 49.6381 18.2966 50.5858C16.4655 55.2127 16.4655 55.2127 15.9103 55.7679C15.017 55.8027 14.1224 55.8083 13.2284 55.798C12.7405 55.7936 12.2526 55.7893 11.75 55.7848C11.1841 55.7764 11.1841 55.7764 10.6068 55.7679C10.4663 55.362 10.3258 54.9561 10.1811 54.5379C9.64766 53.0148 9.10378 51.4962 8.55271 49.9794C8.31765 49.3258 8.08667 48.6707 7.8601 48.0141C6.59904 44.3688 5.54051 41.3591 2.19104 39.1194C1.44604 38.4107 1.44604 38.4107 1.30762 37.2467C1.4651 35.6091 1.89093 34.1832 2.41033 32.625Z" fill="#E6C067" />
                                    <path d="M40.0176 38.8928C41.549 38.863 43.0804 38.8331 44.6582 38.8024C45.3738 38.7826 45.3738 38.7826 46.1039 38.7625C48.6262 38.7388 50.373 38.9226 52.5533 40.3392C54.0167 41.8026 54.3636 43.1105 54.4819 45.1607C54.3586 46.5492 54.1159 47.7538 53.5176 49.0178C51.3008 50.8572 49.5165 51.4955 46.6772 51.4586C46.2427 51.4543 45.8083 51.4499 45.3607 51.4455C45.0294 51.4399 44.6982 51.4343 44.3569 51.4285C44.3569 52.8605 44.3569 54.2924 44.3569 55.7678C42.9249 55.7678 41.4929 55.7678 40.0176 55.7678C40.0176 50.199 40.0176 44.6303 40.0176 38.8928ZM44.3569 42.7499C44.3569 44.341 44.3569 45.9321 44.3569 47.5714C45.2668 47.6012 45.2668 47.6012 46.195 47.6316C46.5362 47.6428 46.8775 47.654 47.229 47.6655C48.3652 47.6353 48.3652 47.6353 49.6604 46.6071C49.9015 45.1607 49.9015 45.1607 49.6604 43.7142C48.1712 42.7214 47.872 42.6347 46.195 42.6897C45.5884 42.7096 44.9818 42.7294 44.3569 42.7499Z" fill="#E6C067" />
                                    <path d="M40.9821 0.803602C53.5114 0.258852 65.2556 3.15807 74.8225 11.6217C75.5991 12.3517 76.3727 13.0848 77.1429 13.8215C77.4747 14.1173 77.8066 14.4131 78.1486 14.7179C83.9435 20.0776 87.2464 27.505 89.1964 35.0357C89.2567 36.6931 89.2567 36.6931 89.1964 37.9286C89.0373 37.9286 88.8782 37.9286 88.7143 37.9286C88.5726 37.2797 88.5726 37.2797 88.428 36.6178C87.2434 31.6752 85.4022 27.4133 82.9286 22.9822C82.7067 22.5763 82.4848 22.1705 82.2562 21.7523C78.0717 14.8371 70.5578 8.56865 62.6786 6.58932C62.1783 6.4327 61.6779 6.27607 61.1625 6.11471C56.9841 4.86527 52.9854 4.32584 48.6395 4.06831C48.2226 4.03945 47.8057 4.01058 47.3762 3.98085C47.0031 3.9603 46.63 3.93975 46.2456 3.91858C45.3214 3.69646 45.3214 3.69646 44.3571 2.25003C43.4104 1.9716 43.4104 1.9716 42.3683 1.91856C41.7518 1.86884 41.1352 1.81912 40.5 1.76789C40.6591 1.44967 40.8182 1.13146 40.9821 0.803602ZM52.5536 2.25003C54.4821 2.73217 54.4821 2.73217 54.4821 2.73217L52.5536 2.25003Z" fill="#BC8F42" />
                                    <path d="M108.964 42.2678C111.654 43.7904 111.654 43.7904 112.339 45.1607C112.621 48.6518 112.621 48.6518 111.435 50.193C109.809 51.3887 108.618 51.6296 106.574 51.5886C105.589 51.4285 105.589 51.4285 104.143 50.4944C103.022 48.7789 102.795 47.7388 102.913 45.72C103.215 44.5334 103.551 44.029 104.444 43.202C106.227 42.1781 106.957 41.8915 108.964 42.2678Z" fill="#F0F0F0" />
                                    <path d="M20.7321 78.9108C21.1467 79.1612 21.5612 79.4117 21.9884 79.6698C33.3118 86.3976 45.4703 88.9139 58.3393 85.6608C62.351 84.4176 65.9562 82.608 69.583 80.5286C70.875 79.8751 70.875 79.8751 72.3214 79.8751C66.8991 84.2582 60.3047 86.7015 53.5179 88.0715C52.9674 88.1948 52.9674 88.1948 52.4059 88.3207C41.6621 90.2478 30.6506 87.8297 21.478 82.105C20.7321 81.3215 20.7321 81.3215 20.6191 80.0257C20.6564 79.6578 20.6937 79.2899 20.7321 78.9108Z" fill="#B69248" />
                                    <path d="M112.821 42.2678C113.617 42.2678 114.412 42.2678 115.232 42.2678C116.206 43.3225 116.206 43.3225 117.07 44.6785C117.362 45.126 117.653 45.5735 117.953 46.0346C118.169 46.3826 118.385 46.7307 118.607 47.0893C118.766 45.6573 118.925 44.2253 119.089 42.75C119.726 42.75 120.362 42.75 121.018 42.75C121.018 45.6139 121.018 48.4778 121.018 51.4285C118.306 50.8861 118.306 50.8861 117.01 48.9877C116.763 48.634 116.516 48.2804 116.262 47.9161C116.081 47.6432 115.9 47.3704 115.714 47.0893C115.555 48.5212 115.396 49.9532 115.232 51.4285C114.436 51.4285 113.641 51.4285 112.821 51.4285C112.821 48.4055 112.821 45.3825 112.821 42.2678Z" fill="#ECECEC" />
                                    <path d="M155.732 42.75C156.528 42.75 157.323 42.75 158.143 42.75C159.117 43.8047 159.117 43.8047 159.981 45.1607C160.273 45.6082 160.564 46.0557 160.865 46.5167C161.08 46.8648 161.296 47.2128 161.518 47.5714C161.677 45.9804 161.836 44.3893 162 42.75C162.637 42.75 163.273 42.75 163.929 42.75C163.929 45.6139 163.929 48.4779 163.929 51.4286C163.133 51.4286 162.338 51.4286 161.518 51.4286C160.544 50.3739 160.544 50.3739 159.68 49.0179C159.388 48.5704 159.097 48.1229 158.797 47.6618C158.473 47.1398 158.473 47.1398 158.143 46.6071C157.984 48.1982 157.825 49.7893 157.661 51.4286C157.025 51.4286 156.388 51.4286 155.732 51.4286C155.732 48.5646 155.732 45.7007 155.732 42.75Z" fill="#F9F9F9" />
                                    <path d="M129.696 42.2678C130.492 42.2678 131.287 42.2678 132.107 42.2678C132.266 44.4953 132.425 46.7228 132.589 49.0178C133.385 49.0178 134.18 49.0178 135 49.0178C135.159 46.7903 135.318 44.5628 135.482 42.2678C136.277 42.2678 137.073 42.2678 137.893 42.2678C138.265 48.3888 138.265 48.3888 136.928 50.6451C134.902 51.7427 133.914 51.792 131.625 51.4285C130.166 50.0666 129.728 49.3052 129.508 47.3058C129.53 46.7073 129.553 46.1088 129.576 45.4922C129.593 44.8874 129.61 44.2827 129.628 43.6596C129.662 42.9707 129.662 42.9707 129.696 42.2678Z" fill="#EBEBEB" />
                                    <path d="M170.679 42.2679C171.824 42.75 171.824 42.75 172.607 43.2322C172.448 43.8686 172.289 44.505 172.125 45.1607C171.152 45.0038 170.179 44.8468 169.206 44.6899C168.897 44.6862 168.587 44.6824 168.268 44.6786C167.135 45.5935 167.135 45.5935 167.244 47.1496C167.273 47.8357 167.273 47.8357 167.304 48.5357C168.418 48.8539 169.531 49.1722 170.679 49.5C170.679 48.5454 170.679 47.5907 170.679 46.6072C171.474 46.7663 172.27 46.9254 173.09 47.0893C173.09 48.203 173.09 49.3168 173.09 50.4643C171.306 51.6533 169.376 51.7739 167.304 51.4286C165.949 50.5638 165.13 49.9731 164.411 48.5357C164.23 46.9386 164.23 46.9386 164.411 45.1607C166.392 42.7628 167.602 42.0833 170.679 42.2679Z" fill="#E6E6E6" />
                                    <path d="M128.732 42.75C128.892 43.2274 129.051 43.7047 129.215 44.1965C129.055 44.5147 128.896 44.8329 128.732 45.1608C127.46 44.8425 126.187 44.5243 124.875 44.1965C124.875 44.6738 124.875 45.1511 124.875 45.6429C125.412 45.7821 125.949 45.9213 126.503 46.0648C128.25 46.6072 128.25 46.6072 129.215 47.5715C129.388 48.9244 129.454 49.6652 128.618 50.7732C127.542 51.6034 126.944 51.6084 125.598 51.5793C125.226 51.5774 124.853 51.5756 124.468 51.5736C123.429 51.4286 123.429 51.4286 121.982 50.4643C122.142 49.8279 122.301 49.1915 122.465 48.5358C124.613 49.0131 124.613 49.0131 126.804 49.5C126.804 49.0227 126.804 48.5454 126.804 48.0536C126.531 47.9896 126.258 47.9256 125.977 47.8596C125.623 47.7745 125.27 47.6893 124.905 47.6016C124.553 47.5177 124.201 47.4338 123.838 47.3473C122.947 47.0893 122.947 47.0893 122.465 46.6072C122.19 44.084 122.19 44.084 123.158 42.7802C125.045 41.9975 126.759 42.4 128.732 42.75Z" fill="#EEEEEE" />
                                    <path d="M101.733 42.7501C102.667 43.5034 102.667 43.5034 103.179 44.1965C101.956 44.9663 101.439 45.1922 99.9848 44.9498C99.6069 44.8603 99.2291 44.7708 98.8397 44.6786C98.3624 44.9173 98.3624 44.9173 97.8754 45.1608C97.855 46.2856 97.8557 47.411 97.8754 48.5358C98.3754 49.1463 98.3754 49.1463 99.4725 49.0481C99.9001 49.0381 100.328 49.0282 100.768 49.0179C101.405 49.0179 102.041 49.0179 102.697 49.0179C102.697 49.4952 102.697 49.9726 102.697 50.4644C100.916 51.6515 99.4593 51.8105 97.3933 51.4286C95.9547 50.4696 95.1741 49.7966 94.7528 48.0838C94.609 46.0852 94.8335 45.3451 96.1277 43.7445C98.2071 42.1106 99.1358 42.2034 101.733 42.7501Z" fill="#EEEEEE" />
                                    <path d="M40.5004 1.28569C40.5004 1.60391 40.5004 1.92212 40.5004 2.24998C41.4735 2.20289 42.4466 2.15581 43.4196 2.10873C43.7292 2.15534 44.0387 2.20195 44.3576 2.24998C44.8349 2.96596 44.8349 2.96596 45.3219 3.69641C43.7955 4.01017 42.2686 4.32064 40.7415 4.63056C40.1001 4.76248 40.1001 4.76248 39.4457 4.89706C36.909 5.41 34.3943 5.82163 31.8218 6.10712C31.5036 5.47069 31.1854 4.83426 30.8576 4.17855C30.6985 4.49676 30.5393 4.81498 30.3754 5.14284C30.0572 4.98373 29.739 4.82462 29.4111 4.66069C29.4111 4.34248 29.4111 4.02426 29.4111 3.69641C30.3142 3.38224 31.2184 3.07154 32.1232 2.76226C32.6266 2.58885 33.13 2.41545 33.6487 2.2368C35.9472 1.54053 38.1014 1.21513 40.5004 1.28569ZM33.7504 3.69641C35.421 3.45775 35.421 3.45775 37.1254 3.21426C35.4448 2.63473 35.3512 2.62924 33.7504 3.69641Z" fill="#F1E7AB" />
                                    <path d="M144.643 42.75C147.029 42.75 149.416 42.75 151.875 42.75C151.875 43.2273 151.875 43.7046 151.875 44.1964C151.079 44.1964 150.284 44.1964 149.464 44.1964C149.464 46.583 149.464 48.9696 149.464 51.4286C148.668 51.4286 147.873 51.4286 147.053 51.4286C147.053 49.042 147.053 46.6554 147.053 44.1964C146.258 44.1964 145.462 44.1964 144.643 44.1964C144.643 43.7191 144.643 43.2418 144.643 42.75Z" fill="#F4F4F4" />
                                    <path d="M71.3573 79.3928C71.6755 79.5519 71.9937 79.711 72.3216 79.875C66.8992 84.2581 60.3048 86.7014 53.518 88.0714C53.1606 88.1615 52.8033 88.2516 52.4351 88.3445C50.4948 88.65 48.5778 88.6038 46.6173 88.5837C46.2143 88.5815 45.8112 88.5793 45.396 88.5771C44.4069 88.5714 43.4178 88.5628 42.4287 88.5535C42.4287 88.0762 42.4287 87.5989 42.4287 87.1071C43.182 87.1323 43.182 87.1323 43.9505 87.158C53.8943 87.3884 62.2814 84.9015 70.8751 79.875C71.0342 79.7159 71.1934 79.5568 71.3573 79.3928Z" fill="#E2D694" />
                                    <path d="M138.857 42.75C139.494 42.75 140.13 42.75 140.786 42.75C140.786 44.9775 140.786 47.205 140.786 49.5C142.059 49.5 143.332 49.5 144.643 49.5C144.643 50.1364 144.643 50.7729 144.643 51.4286C142.734 51.4286 140.825 51.4286 138.857 51.4286C138.857 48.5646 138.857 45.7007 138.857 42.75Z" fill="#FDFDFD" />
                                    <path d="M108.061 44.3169C109.447 44.6785 109.447 44.6785 109.929 45.1607C110.019 46.818 110.019 46.818 109.929 48.5357C108.965 49.4999 108.965 49.4999 107.789 49.6506C106.554 49.4999 106.554 49.4999 105.68 48.9274C104.902 47.7406 104.899 47.0359 105.108 45.6428C105.978 44.1918 106.356 44.1805 108.061 44.3169Z" fill="#0F0F0F" />
                                    <path d="M30.375 84.2142C30.6374 84.2847 30.8997 84.3552 31.17 84.4279C32.3712 84.7498 33.5728 85.0696 34.7746 85.3895C35.3936 85.5559 35.3936 85.5559 36.0251 85.7256C38.1517 86.29 40.2466 86.7959 42.4286 87.1071C42.4286 87.5844 42.4286 88.0617 42.4286 88.5535C39.5893 88.6558 37.2056 88.3381 34.4732 87.5892C34.1227 87.4972 33.7721 87.4053 33.411 87.3105C32.5586 87.0862 31.7077 86.8562 30.8571 86.6249C30.698 85.8294 30.5389 85.0339 30.375 84.2142Z" fill="#C0A25A" />
                                    <path d="M152.357 42.75C152.994 42.75 153.63 42.75 154.286 42.75C154.286 45.6139 154.286 48.4779 154.286 51.4286C153.65 51.4286 153.013 51.4286 152.357 51.4286C152.357 48.5646 152.357 45.7007 152.357 42.75Z" fill="white" />
                                    <path d="M119.089 42.2678C119.884 42.2678 120.68 42.2678 121.5 42.2678C121.5 43.5407 121.5 44.8135 121.5 46.125C121.802 46.2238 122.104 46.3226 122.415 46.4244C122.809 46.5543 123.203 46.6842 123.609 46.818C124.001 46.9467 124.392 47.0754 124.795 47.2079C125.839 47.5714 125.839 47.5714 126.803 48.0535C126.803 48.5309 126.803 49.0082 126.803 49.5C125.192 49.5358 124.005 49.5315 122.464 49.0178C122.146 49.8134 121.827 50.6089 121.5 51.4285C121.34 51.4285 121.181 51.4285 121.017 51.4285C121.017 48.5646 121.017 45.7007 121.017 42.75C120.381 42.5909 119.745 42.4318 119.089 42.2678Z" fill="#313131" />
                                    <path d="M81 18.6428C83.008 20.4588 84.1968 22.2409 85.3694 24.6696C85.5347 25.007 85.7001 25.3444 85.8704 25.692C87.7374 29.6044 89.3528 33.5367 89.1964 37.9285C89.0373 37.9285 88.8782 37.9285 88.7143 37.9285C88.6198 37.496 88.5253 37.0634 88.428 36.6177C87.112 31.1268 85.0525 26.0759 81.8438 21.402C81 20.0893 81 20.0893 81 18.6428Z" fill="#C29E54" />
                                    <path d="M2.41033 32.625C2.86077 34.0764 2.91393 34.4892 2.41033 36C2.88766 36 3.36498 36 3.85676 36C3.85676 36.3182 3.85676 36.6364 3.85676 36.9643C4.33408 36.9643 4.81141 36.9643 5.30319 36.9643C5.14408 38.3963 4.98498 39.8282 4.82105 41.3036C2.41817 39.6595 2.41817 39.6595 1.44605 38.4107C1.19836 36.3595 1.76604 34.5579 2.41033 32.625Z" fill="#E6DA9A" />
                                    <path d="M29.4109 4.17859C29.4109 4.4968 29.4109 4.81502 29.4109 5.14287C28.9572 5.36413 28.5034 5.58539 28.036 5.81335C27.4295 6.11208 26.8231 6.41091 26.2167 6.70984C25.7701 6.92706 25.7701 6.92706 25.3145 7.14866C23.3554 8.1179 21.5629 9.19833 19.768 10.4464C19.4498 10.2873 19.1316 10.1282 18.8037 9.9643C20.428 8.1198 22.2317 7.1045 24.3785 5.98662C24.7026 5.81136 25.0267 5.63609 25.3607 5.45551C27.7777 4.17859 27.7777 4.17859 29.4109 4.17859Z" fill="#C5AC60" />
                                    <path d="M32.7259 3.09374C33.064 3.29262 33.4021 3.4915 33.7504 3.69641C34.8711 4.03262 35.9956 4.35653 37.1254 4.6607C35.7268 5.59314 35.2466 5.77026 33.66 5.92633C33.0534 5.98599 32.4468 6.04566 31.8218 6.10713C31.5036 5.4707 31.1854 4.83427 30.8576 4.17856C30.6985 4.49677 30.5393 4.81499 30.3754 5.14284C30.0572 4.98374 29.739 4.82463 29.4111 4.6607C29.4111 4.34249 29.4111 4.02427 29.4111 3.69641C31.554 2.62499 31.554 2.62499 32.7259 3.09374Z" fill="#DECF8C" />
                                    <path d="M124.875 44.1964C127.647 44.6183 127.647 44.6183 128.732 45.1607C128.732 44.8425 128.732 44.5243 128.732 44.1964C129.05 44.1964 129.369 44.1964 129.696 44.1964C129.856 45.9466 130.015 47.6968 130.179 49.5C129.86 49.5 129.542 49.5 129.214 49.5C129.125 49.132 129.035 48.7641 128.943 48.385C127.944 46.5174 126.841 46.3345 124.875 45.6428C124.875 45.1655 124.875 44.6882 124.875 44.1964Z" fill="#171717" />
                                    <path d="M26.5176 82.7678C29.2899 83.6718 29.2899 83.6718 30.3747 84.2143C30.3747 84.8507 30.3747 85.4871 30.3747 86.1428C29.261 85.8246 28.1472 85.5064 26.9997 85.1785C26.8406 84.383 26.6815 83.5875 26.5176 82.7678Z" fill="#BA984F" />
                                    <path d="M37.6074 86.625C39.1985 86.7841 40.7896 86.9432 42.4289 87.1071C42.4289 87.5845 42.4289 88.0618 42.4289 88.5536C38.6922 88.6138 38.6922 88.6138 37.6074 88.0714C37.6074 87.5941 37.6074 87.1168 37.6074 86.625Z" fill="#D3BD7A" />
                                    <path d="M44.3574 2.25C46.1076 2.25 47.8578 2.25 49.661 2.25C49.8201 2.72732 49.9792 3.20464 50.1431 3.69643C49.36 3.73544 48.5764 3.76352 47.7927 3.78683C47.1382 3.812 47.1382 3.812 46.4706 3.83768C45.9019 3.76776 45.9019 3.76776 45.3217 3.69643C45.0035 3.21911 44.6853 2.74179 44.3574 2.25Z" fill="#CDAA60" />
                                    <path d="M1.44644 38.4106C2.56019 39.3653 3.67394 40.3199 4.82144 41.3035C3.2353 41.8322 2.54908 41.689 0.964293 41.3035C0.943695 40.5002 0.944699 39.6961 0.964293 38.8928C1.1234 38.7337 1.28251 38.5746 1.44644 38.4106Z" fill="#CDB870" />
                                    <path d="M34.2324 85.6606C35.6644 85.8993 35.6644 85.8993 37.1253 86.1428C37.2844 86.7792 37.4435 87.4156 37.6074 88.0714C36.4937 87.9123 35.3799 87.7531 34.2324 87.5892C34.2324 86.9528 34.2324 86.3164 34.2324 85.6606Z" fill="#C8AD67" />
                                    <path d="M40.5 2.25002C41.1165 2.22018 41.7331 2.19035 42.3683 2.15962C42.8885 2.13444 42.8885 2.13444 43.4192 2.10876C43.7287 2.15538 44.0383 2.20199 44.3571 2.25002C44.6754 2.72734 44.9936 3.20466 45.3214 3.69645C44.2077 3.85555 43.0939 4.01466 41.9464 4.17859C41.4691 3.54216 40.9918 2.90573 40.5 2.25002Z" fill="#E1C986" />
                                    <path d="M18.3218 9.96423C18.6401 10.2824 18.9583 10.6007 19.2861 10.9285C18.3732 11.8415 17.4322 12.5774 16.3933 13.3392C16.2342 13.021 16.0751 12.7028 15.9111 12.3749C16.7067 11.5794 17.5022 10.7839 18.3218 9.96423Z" fill="#B79448" />
                                    <path d="M42.4287 87.1072C43.7016 87.2663 44.9744 87.4254 46.2859 87.5893C46.2859 87.9075 46.2859 88.2257 46.2859 88.5536C45.013 88.5536 43.7401 88.5536 42.4287 88.5536C42.4287 88.0763 42.4287 87.599 42.4287 87.1072Z" fill="#E0D091" />
                                    <path d="M73.7677 77.4644C74.0859 77.6235 74.4041 77.7826 74.732 77.9465C74.2547 78.4238 73.7774 78.9011 73.2856 79.3929C72.9674 79.2338 72.6491 79.0747 72.3213 78.9108C72.7986 78.4335 73.2759 77.9561 73.7677 77.4644Z" fill="#DDCE90" />
                                    <path d="M89.1963 38.8928C89.3554 38.8928 89.5145 38.8928 89.6784 38.8928C89.6784 40.1657 89.6784 41.4385 89.6784 42.75C89.5193 42.75 89.3602 42.75 89.1963 42.75C89.1963 41.4771 89.1963 40.2043 89.1963 38.8928Z" fill="#F3E9AE" />
                                    <path d="M76.6606 75.0536C76.6606 75.5309 76.6606 76.0082 76.6606 76.5C76.3424 76.3409 76.0241 76.1818 75.6963 76.0179C76.0145 75.6997 76.3327 75.3814 76.6606 75.0536Z" fill="#C9B66E" />
                                </svg>

                            </div>
                        </div>
                    </div>


                </div>
                <div className={aboutusStyles.subContainerRight}>
                    <div className={aboutusStyles.subContainerRightContent}>
                        <div className={aboutusStyles.imageCard}>

                            {/* <img src={aboutUsImage} /> */}
                        </div>

                        <div className={aboutusStyles.descriptionCard}>
                            <div className={aboutusStyles.descriptionCardSummary}>
                                At Vopaq, we drive success with customized strategic solutions. Through cutting-edge consulting, business development, and ongoing monitoring, we navigate the intricacies of the business world alongside you.
                            </div>
                            <div className={aboutusStyles.descriptionCardParaOne}>

                                Our team is committed to developing strategies that reflect your vision. We offer consulting services to tackle your challenges and drive business development for expansion. With precise monitoring of your operations, we ensure continuous improvement and sustainable growth.
                            </div>
                            <div className={aboutusStyles.descriptionCardParaTwo}>

                                With a dedication to excellence, innovation, and client success, explore how our comprehensive services can enhance your business journey and unlock its full potential..
                            </div>

                            <div className={aboutusStyles.aboutUsButtons}>

                                <Button className={aboutusStyles.buttonOne}>
                                    Read More
                                </Button>

                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    );

}