import React from 'react'
import './svg.css';
import {motion} from 'framer-motion';

const svgVariants = {
    hidden: {
        opacity: 0,
        y: -60,
        x: 150
    },
    visible: {
        opacity: 1, 
        y: -60,
        x: 0
    }
  }

function EmergencySvg() {
    return (
        <motion.div className='svg-animation-container'
            variants={svgVariants}
            initial = "hidden"
            animate = "visible"
            transition={{type: 'spring', delay: 0.7, stiffness: 250 }}
        >
            <svg width="250" height="720" viewBox="0 0 563 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Emergency">
                <g id="EmePerson">
                <g id="EmeRightArm">
                <path id="Vector" d="M88.53 366.707C89.7848 365.487 90.7522 364.012 91.3642 362.386C91.9761 360.759 92.2176 359.02 92.0718 357.292C91.926 355.564 91.3964 353.888 90.5202 352.382C89.644 350.877 88.4426 349.579 87.0006 348.579L80.9046 309.085L55.8643 316.83L69.5822 352.065C68.0338 354.557 67.4693 357.52 67.9957 360.394C68.5221 363.268 70.1028 365.852 72.4384 367.657C74.774 369.461 77.7021 370.362 80.6679 370.187C83.6337 370.011 86.4311 368.773 88.5301 366.707H88.53Z" fill="#FFB8B8"/>
                <path id="Vector_2" d="M62.7342 348.126L47.2877 277.234C45.7829 270.443 46.0773 263.387 48.1429 256.74C50.2084 250.093 53.9759 244.078 59.0844 239.272C78.8561 220.548 104.267 196.947 113.045 190.843C121.283 185.072 131.252 182.18 141.358 182.63L141.57 182.653L154.857 194.993L125.913 241.818L81.9721 268.874L86.8619 338.358L62.7342 348.126Z" fill="#6C63FF"/>
                <path id="Vector_3" d="M116.83 251.789H52.0087C49.2009 251.789 46.9247 254.025 46.9247 256.785C46.9247 259.544 49.2009 261.781 52.0087 261.781H116.83C119.638 261.781 121.914 259.544 121.914 256.785C121.914 254.025 119.638 251.789 116.83 251.789Z" fill="#CCCCCC"/>
                <path id="Vector_4" d="M116.83 360.457H52.0087C49.2009 360.457 46.9247 362.693 46.9247 365.453C46.9247 368.212 49.2009 370.449 52.0087 370.449H116.83C119.638 370.449 121.914 368.212 121.914 365.453C121.914 362.693 119.638 360.457 116.83 360.457Z" fill="#CCCCCC"/>
                <path id="Vector_5" d="M85.0548 632.751C84.4195 632.751 83.8072 632.517 83.3386 632.096C82.87 631.674 82.5789 631.096 82.5227 630.474L50.117 257.006C50.0575 256.346 50.2671 255.689 50.6998 255.181C51.1326 254.673 51.7529 254.355 52.4245 254.296C53.096 254.238 53.7637 254.444 54.2807 254.869C54.7977 255.294 55.1217 255.904 55.1812 256.564L85.0182 601.618L114.007 256.57C114.036 256.243 114.13 255.925 114.283 255.634C114.437 255.343 114.648 255.084 114.903 254.873C115.159 254.662 115.454 254.502 115.772 254.403C116.091 254.304 116.426 254.268 116.758 254.296C117.091 254.324 117.415 254.416 117.711 254.567C118.007 254.719 118.27 254.926 118.485 255.177C118.7 255.428 118.863 255.718 118.963 256.031C119.064 256.343 119.101 256.673 119.073 257L87.5876 630.468C87.5328 631.09 87.2427 631.67 86.7745 632.093C86.3062 632.515 85.6938 632.75 85.058 632.751H85.0548Z" fill="#CCCCCC"/>
                </g>
                <g id="EmeBody">
                <path id="Vector_6" d="M58.4095 617.772L42.5499 612.805L54.4999 550.321L77.9092 557.653L58.4095 617.772Z" fill="#FFB8B8"/>
                <path id="Vector_7" d="M57.5268 631.598L6.46912 615.605L6.89078 614.301C8.51484 609.315 12.0849 605.166 16.8178 602.763C21.5507 600.36 27.0601 599.9 32.1377 601.484L64.0513 611.481L57.5268 631.598Z" fill="#2F2E41"/>
                <path id="Vector_8" d="M173.803 617.449H157.156L149.234 554.349H173.803V617.449Z" fill="#FFB8B8"/>
                <path id="Vector_9" d="M125.688 632.015H176.735V613.4H144.51C139.52 613.405 134.736 615.356 131.207 618.824C127.678 622.291 125.694 626.993 125.688 631.897V632.015Z" fill="#2F2E41"/>
                <path id="Vector_10" d="M173.316 596.972L167.697 596.148C150.657 593.653 149.637 593.504 146.932 592.336C145.55 591.74 145.453 582.727 146.282 532.062C146.891 494.872 147.649 448.588 146.178 423.74C146.117 422.76 145.722 421.828 145.057 421.095C144.391 420.363 143.494 419.871 142.51 419.701C141.525 419.531 140.511 419.691 139.631 420.156C138.751 420.622 138.056 421.365 137.658 422.266C124.979 451.04 103.707 515.433 89.6303 558.043C84.734 572.866 80.8667 584.572 78.42 591.59C77.9474 592.917 76.9883 594.023 75.7301 594.693C74.4718 595.362 73.0048 595.546 71.6156 595.21C60.0317 592.364 60.8062 591.154 44.3073 586.96C42.8799 586.603 41.6486 585.716 40.8711 584.486C40.0937 583.257 39.8303 581.779 40.1362 580.363C43.1204 566.533 97.7311 342.293 101.911 320.977C102.053 320.247 102.34 319.552 102.756 318.932C103.172 318.313 103.709 317.78 104.336 317.365C104.963 316.95 105.668 316.661 106.409 316.516C107.15 316.37 107.913 316.37 108.654 316.516C120.95 318.95 128.43 321.533 140.58 324.031C153.691 326.726 167.249 329.513 180.473 332.114C181.789 332.374 182.968 333.085 183.802 334.119C187.074 338.181 191.926 340.461 197.063 342.874C200.526 344.501 192.678 344.354 195.694 346.701C207.909 356.203 190.344 549.158 179.731 592.737C179.391 594.101 178.544 595.292 177.358 596.075C176.171 596.858 174.73 597.178 173.316 596.972V596.972Z" fill="#2F2E41"/>
                <path id="Vector_11" d="M90.1263 352.525C93.7258 346.616 99.1906 318.929 105.93 272.456C110.518 240.732 114.516 208.497 116.499 192.031C116.653 190.699 117.149 189.426 117.94 188.334C118.732 187.241 119.792 186.364 121.023 185.784C122.31 185.174 123.59 184.596 124.862 184.051C141.287 177.03 157.933 174.704 174.334 177.136C190.711 179.608 206.073 186.486 218.716 197.01L218.866 197.148L218.904 197.346C218.976 197.712 225.864 234.191 211.755 258.836C197.839 283.154 197.677 347.552 197.677 348.2V349.028L196.867 348.801C175.219 342.722 91.596 353.357 90.7536 353.465L89.4516 353.632L90.1263 352.525Z" fill="#6C63FF"/>
                <path id="Vector_12" d="M0.698863 618.506L58.8765 632.271C60.0051 632.565 61.2028 632.46 62.2607 631.974C63.3186 631.489 64.1697 630.654 64.6655 629.616L114.641 499.037C114.862 498.535 114.976 497.994 114.977 497.447C114.977 496.9 114.865 496.359 114.646 495.857C114.394 495.293 114.028 494.785 113.57 494.364C113.112 493.943 112.572 493.617 111.983 493.407L68.2421 476.992C67.5507 476.732 66.8114 476.618 66.0723 476.658C65.3332 476.698 64.6111 476.891 63.9531 477.225C63.3813 477.502 62.8767 477.896 62.4732 478.382C62.0697 478.867 61.7768 479.431 61.614 480.037L61.6127 480.043L30.74 595.13L30.2814 595.158C30.1039 595.169 12.4054 596.352 4.44675 605.741C2.96135 607.5 1.86172 609.542 1.2168 611.739C0.571877 613.935 0.395552 616.239 0.698863 618.506V618.506Z" fill="#CCCCCC"/>
                <path id="Vector_13" d="M42.8325 545.306L42.5648 547.791L95.6059 553.311L95.8736 550.826L42.8325 545.306Z" fill="#B3B3B3"/>
                <path id="Vector_14" d="M38.2082 565.887L37.165 568.165L79.8488 587.038L80.892 584.76L38.2082 565.887Z" fill="#B3B3B3"/>
                <path id="Vector_15" d="M101.456 533.329L51.1457 516.953L52.1892 514.675L102.499 531.05L101.456 533.329Z" fill="#B3B3B3"/>
                <path id="Vector_16" d="M106.54 522.087L56.2297 498.218L57.2732 495.939L107.583 519.809L106.54 522.087Z" fill="#B3B3B3"/>
                <path id="Vector_17" d="M33.7712 585.447L32.1204 587.346L68.3939 617.797L70.0448 615.898L33.7712 585.447Z" fill="#B3B3B3"/>
                </g>
                <g id="EmeLeftArm">
                <path id="Vector_18" d="M215.968 268.026H151.147C148.339 268.026 146.063 270.263 146.063 273.023C146.063 275.782 148.339 278.019 151.147 278.019H215.968C218.776 278.019 221.052 275.782 221.052 273.023C221.052 270.263 218.776 268.026 215.968 268.026Z" fill="#CCCCCC"/>
                <path id="Vector_19" d="M215.968 376.694H151.147C148.339 376.694 146.063 378.931 146.063 381.691C146.063 384.45 148.339 386.687 151.147 386.687H215.968C218.776 386.687 221.052 384.45 221.052 381.691C221.052 378.931 218.776 376.694 215.968 376.694Z" fill="#CCCCCC"/>
                <path id="Vector_20" d="M184.193 634C183.558 634 182.946 633.766 182.477 633.345C182.008 632.923 181.717 632.345 181.661 631.723L149.255 273.243C149.226 272.917 149.262 272.587 149.362 272.274C149.462 271.961 149.624 271.671 149.838 271.419C150.052 271.168 150.315 270.96 150.611 270.808C150.907 270.656 151.23 270.563 151.563 270.534C151.895 270.505 152.23 270.541 152.549 270.639C152.867 270.737 153.163 270.896 153.419 271.107C153.675 271.317 153.886 271.576 154.041 271.866C154.195 272.157 154.29 272.475 154.32 272.802L184.157 602.867L213.146 272.808C213.203 272.148 213.526 271.537 214.042 271.111C214.558 270.684 215.225 270.477 215.897 270.534C216.568 270.591 217.19 270.907 217.624 271.414C218.058 271.921 218.269 272.577 218.211 273.237L186.726 631.717C186.671 632.339 186.381 632.919 185.913 633.342C185.445 633.764 184.832 633.999 184.196 634H184.193Z" fill="#CCCCCC"/>
                <path id="Vector_21" d="M163.264 378.277C162.884 376.583 162.888 374.828 163.274 373.136C163.659 371.444 164.418 369.855 165.496 368.482C166.574 367.109 167.945 365.985 169.513 365.189C171.081 364.393 172.807 363.945 174.571 363.875L201.526 333.975L218.264 353.849L187.266 376.103C187.188 379.022 186.023 381.811 183.992 383.943C181.962 386.074 179.206 387.399 176.247 387.667C173.289 387.935 170.333 387.127 167.94 385.396C165.547 383.666 163.883 381.132 163.264 378.277V378.277Z" fill="#FFB8B8"/>
                <path id="Vector_22" d="M178.958 357.466L221.481 301.746L199.554 255.569L201.146 200.803L219.123 197.539L219.314 197.633C228.047 202.653 234.816 210.403 238.541 219.647C242.535 229.459 250.818 262.841 257.063 289.117C258.694 295.88 258.532 302.941 256.59 309.624C254.649 316.307 250.994 322.388 245.976 327.286L193.811 378.551L178.958 357.466Z" fill="#6C63FF"/>
                </g>
                <g id="EmeHead">
                <path id="Vector_23" d="M157.8 167.68C176.219 167.68 191.15 153.007 191.15 134.907C191.15 116.806 176.219 102.133 157.8 102.133C139.382 102.133 124.451 116.806 124.451 134.907C124.451 153.007 139.382 167.68 157.8 167.68Z" fill="#FFB8B8"/>
                <path id="Vector_24" d="M172.015 163.585C170.068 155.466 179.91 137.996 177.963 129.877C176.645 124.379 163.489 128.116 160.418 123.341C157.348 118.565 152.205 114.696 146.457 114.633C139.851 114.56 133.35 119.376 127.091 117.294C120.763 115.19 118.741 106.674 121.538 100.712C124.336 94.7502 130.363 90.9512 136.317 87.9744C146.457 82.9051 158.263 79.2033 169.115 82.5572C175.675 84.5846 181.16 88.9777 186.468 93.2744C191.307 97.1911 196.227 101.197 199.609 106.383C206.235 116.544 205.836 130.235 200.173 140.944C194.51 151.652 184.192 159.511 172.823 164.073" fill="#2F2E41"/>
                </g>
                </g>
                <g id="Shadow">
                <path id="Vector_25" d="M516.802 567.338C508.795 583.675 494.039 595.829 478.57 605.709C461.664 616.498 443.448 625.163 424.35 631.502C421.731 632.389 419.088 633.213 416.431 634H309.018C308.269 633.201 307.557 632.364 306.884 631.502C299.69 622.446 295.8 610.842 297.211 599.476C299.029 584.875 310.315 571.46 324.931 568.362C339.561 565.252 356.236 573.833 360.685 587.885C363.126 560.805 365.947 532.602 380.589 509.544C393.858 488.672 416.825 473.734 441.711 471.061C456.349 469.562 471.117 472.22 484.264 478.717C485.472 479.317 486.667 479.941 487.836 480.591C495.727 484.987 502.69 490.825 508.35 497.79C523.869 517.101 527.67 545.167 516.802 567.338Z" fill="#7CFC00"/>
                <path id="Vector_26" d="M487.049 482.302C437.098 522.28 397.628 573.443 371.946 631.502C371.578 632.326 371.209 633.163 370.853 634H365.794C366.15 633.163 366.506 632.326 366.875 631.502C371.768 620.26 377.17 609.219 383.105 598.464C395.736 575.595 410.596 553.985 427.476 533.938C444.346 513.866 463.188 495.479 483.731 479.042C483.894 478.912 484.073 478.803 484.264 478.717C484.621 478.565 485.009 478.493 485.398 478.509C485.787 478.524 486.168 478.626 486.511 478.806C486.854 478.986 487.152 479.24 487.381 479.549C487.611 479.858 487.766 480.214 487.836 480.591C487.873 480.919 487.819 481.251 487.68 481.552C487.542 481.853 487.324 482.112 487.049 482.302V482.302Z" fill="white"/>
                <path id="Vector_27" d="M364.498 597.033V27.708C364.498 20.0201 364.647 12.3157 364.498 4.62871C364.491 4.29263 364.498 3.95586 364.498 3.61969C364.498 -1.20257 356.872 -1.21055 356.872 3.61969V572.945C356.872 580.633 356.723 588.337 356.872 596.024C356.878 596.36 356.872 596.697 356.872 597.033C356.872 601.855 364.498 601.863 364.498 597.033V597.033Z" fill="#F2F2F2"/>
                <path id="BGElement" d="M406.674 162.741H315.161C312.971 162.739 310.871 161.883 309.322 160.361C307.774 158.839 306.902 156.775 306.9 154.623V45.3301C306.902 43.1776 307.774 41.114 309.322 39.592C310.871 38.0699 312.971 37.2138 315.161 37.2113H406.674C408.864 37.2138 410.964 38.0699 412.513 39.592C414.062 41.114 414.933 43.1776 414.935 45.3301V154.623C414.933 156.775 414.062 158.839 412.513 160.361C410.964 161.883 408.864 162.739 406.674 162.741V162.741Z" fill="#F2F2F2"/>
                </g>
                </g>
            </svg>
        </motion.div>
    )
}

export default EmergencySvg