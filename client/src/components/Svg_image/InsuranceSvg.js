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

function InsuranceSvg() {
    return (
        <motion.div className='svg-animation-container'
            variants={svgVariants}
            initial = "hidden"
            animate = "visible"
            transition={{type: 'spring', delay: 0.7, stiffness: 250 }}
        >
          <svg width="900" height="592" viewBox="0 0 900 592" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Insurance">
            <g id="InsMoving">
            <g id="InsCar">
            <path id="Vector" d="M554.418 548.837C554.419 559.817 550.723 570.373 544.103 578.302C537.482 586.231 528.449 590.921 518.887 591.392C509.325 591.864 499.974 588.081 492.785 580.833C485.596 573.585 481.124 563.432 480.303 552.492C480.249 551.8 480.209 551.108 480.191 550.406V550.37C480.173 549.859 480.164 549.348 480.164 548.837C480.167 537.542 484.08 526.712 491.042 518.727C498.005 510.742 507.446 506.256 517.291 506.256C527.136 506.256 536.577 510.742 543.54 518.727C550.502 526.712 554.415 537.542 554.418 548.837V548.837Z" fill="#65617D"/>
            <path id="Vector_2" opacity="0.2" d="M554.418 548.837C554.419 559.817 550.723 570.373 544.103 578.302C537.482 586.231 528.449 590.921 518.887 591.392C509.325 591.864 499.974 588.081 492.785 580.833C485.596 573.585 481.124 563.432 480.303 552.492C480.249 551.8 480.209 551.108 480.191 550.406V550.37C480.173 549.859 480.164 549.348 480.164 548.837C480.167 537.542 484.08 526.712 491.042 518.727C498.005 510.742 507.446 506.256 517.291 506.256C527.136 506.256 536.577 510.742 543.54 518.727C550.502 526.712 554.415 537.542 554.418 548.837V548.837Z" fill="black"/>
            <path id="Vector_3" d="M517.29 572.07C528.474 572.07 537.541 561.668 537.541 548.837C537.541 536.005 528.474 525.603 517.29 525.603C506.105 525.603 497.039 536.005 497.039 548.837C497.039 561.668 506.105 572.07 517.29 572.07Z" fill="#DCE0ED"/>
            <path id="Vector_4" d="M517.29 562.777C524.001 562.777 529.441 556.536 529.441 548.837C529.441 541.138 524.001 534.897 517.29 534.897C510.579 534.897 505.139 541.138 505.139 548.837C505.139 556.536 510.579 562.777 517.29 562.777Z" fill="#65617D"/>
            <path id="Vector_5" d="M356.212 548.837C356.213 559.817 352.517 570.373 345.897 578.302C339.276 586.231 330.243 590.921 320.681 591.392C311.119 591.864 301.768 588.081 294.579 580.833C287.39 573.585 282.918 563.432 282.097 552.492C282.043 551.8 282.003 551.109 281.985 550.406V550.37C281.967 549.859 281.958 549.348 281.958 548.837C281.961 537.542 285.874 526.712 292.837 518.727C299.799 510.742 309.241 506.256 319.085 506.256C328.93 506.256 338.371 510.742 345.334 518.727C352.296 526.712 356.209 537.542 356.212 548.837V548.837Z" fill="#65617D"/>
            <path id="Vector_6" opacity="0.2" d="M356.212 548.837C356.213 559.817 352.517 570.373 345.897 578.302C339.276 586.231 330.243 590.921 320.681 591.392C311.119 591.864 301.768 588.081 294.579 580.833C287.39 573.585 282.918 563.432 282.097 552.492C282.043 551.8 282.003 551.109 281.985 550.406V550.37C281.967 549.859 281.958 549.348 281.958 548.837C281.961 537.542 285.874 526.712 292.837 518.727C299.799 510.742 309.241 506.256 319.085 506.256C328.93 506.256 338.371 510.742 345.334 518.727C352.296 526.712 356.209 537.542 356.212 548.837V548.837Z" fill="black"/>
            <path id="Vector_7" d="M319.084 572.07C330.268 572.07 339.335 561.668 339.335 548.837C339.335 536.005 330.268 525.603 319.084 525.603C307.9 525.603 298.833 536.005 298.833 548.837C298.833 561.668 307.9 572.07 319.084 572.07Z" fill="#DCE0ED"/>
            <path id="Vector_8" d="M319.084 562.777C325.795 562.777 331.235 556.536 331.235 548.837C331.235 541.138 325.795 534.897 319.084 534.897C312.373 534.897 306.933 541.138 306.933 548.837C306.933 556.536 312.373 562.777 319.084 562.777Z" fill="#65617D"/>
            <path id="Vector_9" d="M565.998 540.855L553.61 540.237L542.3 516.139L502.443 512.431L483.053 541.473L484.131 549.506L481.437 556.921L354.866 558.157V554.45H353.789L352.711 548.888H362.406L355.404 540.237L330.629 516.139C330.629 516.139 288.079 517.374 287.54 516.139C287.002 514.903 289.964 502.235 289.964 502.235L308.277 496.056L370.755 490.495C384.489 465.469 396.877 453.729 396.877 453.729H557.381L564.921 498.219V498.324L565.998 540.855Z" fill="#444053"/>
            <path id="Vector_10" d="M476.59 543.945C476.59 543.945 492.748 509.341 505.136 509.341H535.298C535.298 509.341 542.838 509.341 546.07 516.139L558.458 543.945H548.763C548.763 543.945 540.684 517.992 531.528 517.374C522.371 516.757 506.752 517.374 506.752 517.374C506.752 517.374 501.366 517.374 498.134 524.789C494.903 532.204 483.976 548.357 483.976 548.357C483.976 548.357 472.281 552.596 476.59 543.945Z" fill="#33323D"/>
            <path id="Vector_11" d="M573 538.384H552.74L552.533 556.921L573 551.36V538.384Z" fill="#33323D"/>
            <path id="Vector_12" d="M280 527.261C280 527.261 281.077 517.992 288.618 514.285L338.169 511.195C338.169 511.195 346.248 511.813 350.557 523.554L364.561 547.652V551.36H348.941C348.941 551.36 341.401 518.61 319.857 519.846H294.004C294.004 519.846 288.079 519.846 285.925 530.969L280 527.261Z" fill="#33323D"/>
            <path id="Vector_13" d="M396.338 457.436H561.689C561.689 455.634 561.065 453.905 559.954 452.63C558.843 451.355 557.336 450.639 555.765 450.639H402.263C401.485 450.639 400.714 450.815 399.996 451.157C399.277 451.498 398.624 451.999 398.074 452.63C397.523 453.261 397.087 454.011 396.789 454.835C396.492 455.66 396.338 456.544 396.338 457.436Z" fill="#33323D"/>
            <path id="Vector_14" opacity="0.3" d="M431.774 493.894H386.017C385.502 493.894 384.995 493.746 384.542 493.464C384.089 493.182 383.704 492.774 383.424 492.278C383.143 491.783 382.974 491.214 382.934 490.625C382.893 490.035 382.981 489.443 383.191 488.903L390.431 470.213C391.548 467.33 393.37 464.88 395.676 463.161C397.982 461.441 400.674 460.526 403.424 460.526H431.224C431.736 460.526 432.242 460.641 432.714 460.866C433.187 461.09 433.616 461.419 433.977 461.834C434.339 462.249 434.626 462.741 434.821 463.283C435.017 463.825 435.118 464.406 435.118 464.992V490.057C435.118 490.561 435.031 491.06 434.863 491.525C434.695 491.991 434.449 492.414 434.138 492.77C433.828 493.126 433.459 493.409 433.053 493.602C432.648 493.794 432.213 493.894 431.774 493.894Z" fill="#6C63FF"/>
            <path id="Vector_15" opacity="0.3" d="M489.369 460.526H449.269C447.998 460.526 446.967 461.708 446.967 463.167V491.252C446.967 492.711 447.998 493.894 449.269 493.894H489.369C490.64 493.894 491.671 492.711 491.671 491.252V463.167C491.671 461.708 490.64 460.526 489.369 460.526Z" fill="#6C63FF"/>
            <path id="Vector_16" d="M564.921 498.219V498.324L495.441 499.455L493.632 453.729H557.38L564.921 498.219Z" fill="#33323D"/>
            <path id="Vector_17" opacity="0.3" d="M550.231 460.526H503.668C502.397 460.526 501.366 461.708 501.366 463.167V491.252C501.366 492.711 502.397 493.894 503.668 493.894H550.231C551.502 493.894 552.533 492.711 552.533 491.252V463.167C552.533 461.708 551.502 460.526 550.231 460.526Z" fill="#6C63FF"/>
            <path id="Vector_18" d="M437.618 505.634H421.845C421.441 505.634 421.114 506.01 421.114 506.473V508.502C421.114 508.966 421.441 509.342 421.845 509.342H437.618C438.022 509.342 438.349 508.966 438.349 508.502V506.473C438.349 506.01 438.022 505.634 437.618 505.634Z" fill="#33323D"/>
            <path id="Vector_19" d="M487.169 505.634H471.397C470.993 505.634 470.665 506.01 470.665 506.473V508.502C470.665 508.966 470.993 509.342 471.397 509.342H487.169C487.573 509.342 487.901 508.966 487.901 508.502V506.473C487.901 506.01 487.573 505.634 487.169 505.634Z" fill="#33323D"/>
            <path id="Vector_20" d="M525.512 456.836H505.567V479.323H525.512V456.836Z" fill="white"/>
            <path id="Vector_21" d="M514.557 478.272V475.764C513.386 475.76 512.24 475.381 511.246 474.672L511.765 473.008C512.784 473.699 513.945 474.068 515.129 474.076C516.665 474.076 517.704 473.058 517.704 471.642C517.704 470.277 516.86 469.433 515.258 468.688C513.051 467.695 511.934 466.553 511.934 464.392C511.934 462.332 513.088 460.768 515.079 460.395V457.888H516.174V460.296C517.161 460.305 518.129 460.604 518.987 461.165L518.446 462.803C517.669 462.236 516.764 461.942 515.843 461.959C514.176 461.959 513.796 463.101 513.796 464.095C513.796 465.386 514.349 466.031 516.232 466.925C518.461 467.968 519.834 469.259 519.834 471.469C519.834 473.43 518.643 475.267 516.414 475.689V478.272L514.557 478.272Z" fill="#636780"/>
            </g>
            <g id="InsHouse">
            <g id="Group" opacity="0.7">
            <path id="Vector_22" opacity="0.7" d="M556.94 450.639H400.172L401.257 366.395L446.091 357.88H509.477L555.854 363.911L556.94 450.639Z" fill="url(#paint0_linear)"/>
            </g>
            <path id="Vector_23" d="M554.769 449.577H402.342L403.428 367.457L446.235 358.942H510.249L553.684 364.973L554.769 449.577Z" fill="#EEEEEE"/>
            <g id="Group_2" opacity="0.7">
            <path id="Vector_24" opacity="0.7" d="M460.775 327.727H449.336V353.626H460.775V327.727Z" fill="url(#paint1_linear)"/>
            </g>
            <g id="Group_3" opacity="0.7">
            <path id="Vector_25" opacity="0.7" d="M449.331 386.58V358.588H399.645L391.207 386.58V389.449H449.645V386.58H449.331Z" fill="url(#paint2_linear)"/>
            </g>
            <path id="Vector_26" d="M449.336 386.611H391.824L400.172 358.942H449.336V386.611Z" fill="#34F17D"/>
            <path id="Vector_27" opacity="0.1" d="M449.336 386.611H391.824L400.172 358.942H449.336V386.611Z" fill="black"/>
            <path id="Vector_28" d="M449.645 386.611H391.824V389.449H449.645V386.611Z" fill="#34F17D"/>
            <g id="Group_4" opacity="0.7">
            <path id="Vector_29" opacity="0.7" d="M556.36 358.234H506.54V386.543H506.226V389.449H564.824V386.543L556.36 358.234Z" fill="url(#paint3_linear)"/>
            </g>
            <path id="Vector_30" d="M506.535 386.611H564.047L555.7 358.942H506.535V386.611Z" fill="#34F17D"/>
            <path id="Vector_31" opacity="0.1" d="M506.535 386.611H564.047L555.7 358.942H506.535V386.611Z" fill="black"/>
            <path id="Vector_32" d="M506.227 389.449H564.048V386.611H506.227V389.449Z" fill="#34F17D"/>
            <path id="Vector_33" opacity="0.5" d="M438.515 400.625H407.285V422.971H438.515V400.625Z" fill="#34F17D"/>
            <path id="Vector_34" opacity="0.1" d="M440.366 421.378H405.428V425.278H440.366V421.378Z" fill="black"/>
            <path id="Vector_35" d="M440.366 421.024H405.428V424.924H440.366V421.024Z" fill="#535461"/>
            <g id="Group_5" opacity="0.1">
            <path id="Vector_36" opacity="0.1" d="M438.515 400.625H407.285V409.494H438.515V400.625Z" fill="black"/>
            </g>
            <path id="Vector_37" opacity="0.5" d="M548.901 400.625H517.67V422.971H548.901V400.625Z" fill="#34F17D"/>
            <path id="Vector_38" opacity="0.1" d="M550.752 421.378H515.814V425.278H550.752V421.378Z" fill="black"/>
            <path id="Vector_39" d="M550.752 421.024H515.814V424.924H550.752V421.024Z" fill="#535461"/>
            <g id="Group_6" opacity="0.1">
            <path id="Vector_40" opacity="0.1" d="M548.901 400.625H517.67V409.494H548.901V400.625Z" fill="black"/>
            </g>
            <g id="Group_7" opacity="0.7">
            <path id="Vector_41" opacity="0.7" d="M516.175 360.602L478.034 326.763L441.122 360.578L438.228 356.421L477.992 320L519.011 356.397L516.175 360.602Z" fill="url(#paint4_linear)"/>
            </g>
            <path id="Vector_42" opacity="0.1" d="M444.234 389.449H403.108V389.98H444.234V389.449Z" fill="black"/>
            <path id="Vector_43" opacity="0.1" d="M554.003 389.449H512.414V389.98H554.003V389.449Z" fill="black"/>
            <path id="Vector_44" d="M460.467 328.081H449.645V353.62H460.467V328.081Z" fill="#535461"/>
            <g id="Group_8" opacity="0.7">
            <path id="Vector_45" opacity="0.7" d="M512.414 449.577H443.154V352.381L478.082 351.496L512.414 352.381V449.577Z" fill="url(#paint5_linear)"/>
            </g>
            <path id="Vector_46" d="M511.637 449.577H444.234V352.381L477.938 324.889L511.637 352.381V449.577Z" fill="white"/>
            <path id="Vector_47" d="M486.435 416.94H469.431V449.577H486.435V416.94Z" fill="#535461"/>
            <path id="Vector_48" opacity="0.1" d="M495.405 387.679H460.467V391.579H495.405V387.679Z" fill="black"/>
            <path id="Vector_49" opacity="0.5" d="M493.554 366.926H462.323V389.272H493.554V366.926Z" fill="#34F17D"/>
            <path id="Vector_50" d="M495.405 387.325H460.467V391.225H495.405V387.325Z" fill="#535461"/>
            <g id="Group_9" opacity="0.1">
            <path id="Vector_51" opacity="0.1" d="M493.554 366.926H462.323V375.795H493.554V366.926Z" fill="black"/>
            </g>
            <path id="Vector_52" d="M516.175 360.956L478.034 327.117L441.122 360.932L438.228 356.775L477.992 320.354L519.011 356.751L516.175 360.956Z" fill="#34F17D"/>
            <path id="Vector_53" d="M483.966 434.678C484.648 434.678 485.201 434.044 485.201 433.262C485.201 432.48 484.648 431.846 483.966 431.846C483.285 431.846 482.732 432.48 482.732 433.262C482.732 434.044 483.285 434.678 483.966 434.678Z" fill="#E0E0E0"/>
            </g>
            </g>
            <path id="Vector_54" d="M15 572H0V573H15V572Z" fill="#535461"/>
            <path id="InsHeart" d="M776.657 384H776.209C758.363 384 742.581 393.872 733.503 408.44C724.425 393.872 708.643 384 690.797 384H690.349C676.956 384.133 664.155 389.787 654.727 399.732C645.3 409.678 640.007 423.111 640 437.113C640 454.501 647.284 479.172 661.487 499.473C688.549 538.156 733.503 572 733.503 572C733.503 572 778.457 538.163 805.513 499.473C819.722 479.172 827 454.501 827 437.113C826.993 423.112 821.701 409.68 812.275 399.735C802.848 389.789 790.049 384.135 776.657 384V384ZM770.24 502.45C768.208 502.441 766.225 501.791 764.553 500.584C762.881 499.376 761.596 497.669 760.869 495.685H750.2C749.498 495.68 748.814 495.446 748.245 495.016C747.675 494.585 747.249 493.98 747.025 493.284L743.747 482.961L733.377 520.844C733.175 521.573 732.753 522.214 732.173 522.671C731.592 523.127 730.886 523.375 730.16 523.376H729.951C729.193 523.338 728.471 523.029 727.905 522.501C727.339 521.973 726.963 521.258 726.841 520.475L716.154 453.275L708.344 493.04C708.164 493.795 707.749 494.466 707.162 494.946C706.576 495.425 705.853 495.685 705.108 495.685H690.08C689.629 495.705 689.179 495.629 688.757 495.462C688.336 495.296 687.95 495.042 687.625 494.716C687.299 494.39 687.04 493.998 686.863 493.564C686.686 493.131 686.595 492.664 686.595 492.193C686.595 491.721 686.686 491.255 686.863 490.821C687.04 490.388 687.299 489.996 687.625 489.67C687.95 489.343 688.336 489.089 688.757 488.923C689.179 488.756 689.629 488.681 690.08 488.701H702.477L713.541 435.237C713.722 434.447 714.161 433.747 714.781 433.257C715.402 432.768 716.166 432.518 716.943 432.552C717.72 432.586 718.461 432.901 719.041 433.444C719.62 433.986 720.001 434.722 720.119 435.525L731.033 504.075L740.327 470.182C740.52 469.468 740.929 468.838 741.493 468.388C742.057 467.937 742.745 467.689 743.454 467.681H743.52C744.223 467.681 744.908 467.913 745.477 468.344C746.046 468.775 746.471 469.383 746.69 470.081L752.616 488.72H760.738C761.315 486.886 762.366 485.254 763.774 484.005C765.183 482.756 766.894 481.938 768.719 481.641C770.544 481.345 772.411 481.581 774.116 482.324C775.82 483.067 777.296 484.288 778.378 485.853C779.461 487.417 780.109 489.263 780.251 491.188C780.394 493.114 780.025 495.042 779.185 496.762C778.344 498.481 777.066 499.925 775.491 500.933C773.916 501.941 772.105 502.475 770.258 502.475L770.24 502.45Z" fill="#B62ED0"/>
            <g id="InsUmbrella">
            <path id="Vector_55" d="M743.016 27.5635C743.016 27.5635 751.273 9.33764 737.93 4.59895C724.587 -0.13973 725.547 18.9489 725.547 18.9489L741.778 28.9985" fill="#00FFFF"/>
            <path id="Vector_56" d="M462.654 81.1889L435 104.578C435 104.578 849.864 250.044 897.18 278.901L892.51 238.139L853.314 188.33L777.388 137.795L654.826 98.0168L521.261 47.9025L462.654 81.1889Z" fill="#DEE814"/>
            <path id="Vector_57" d="M673.94 139.355L580.081 383.757C580.081 383.757 565.08 424.227 598.231 431.984C618.163 436.647 628.699 424.032 633.933 413.23C639.523 401.692 624.348 391.546 616.764 401.771C616.641 401.936 616.518 402.106 616.394 402.278C616.209 402.537 596.323 418.636 596.335 396.603C596.383 391.523 597.393 386.503 599.305 381.831L691.546 150.697L673.94 139.355Z" fill="#00FFFF"/>
            <path id="Vector_58" d="M733.488 17.1904C733.488 17.1904 707.077 13.1668 692.221 4.40918C692.221 4.40918 529.216 -31.7889 435.1 103.249C435.1 103.249 878.171 210.255 897.281 277.571C897.281 277.571 925.09 152.999 777.78 38.0095C777.78 38.0094 741.74 24.9421 733.488 17.1904Z" fill="#00FFFF"/>
            </g>
            </g>
            <defs>
            <linearGradient id="paint0_linear" x1="478.556" y1="450.639" x2="478.556" y2="357.88" gradientUnits="userSpaceOnUse">
            <stop stop-color="#808080" stop-opacity="0.25"/>
            <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
            <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="4169.76" y1="3493.8" x2="4169.76" y2="2395.19" gradientUnits="userSpaceOnUse">
            <stop stop-color="#808080" stop-opacity="0.25"/>
            <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
            <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="15594.5" y1="5942.83" x2="15594.5" y2="4382.52" gradientUnits="userSpaceOnUse">
            <stop stop-color="#808080" stop-opacity="0.25"/>
            <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
            <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="28428.1" y1="6006.54" x2="28428.1" y2="4410.22" gradientUnits="userSpaceOnUse">
            <stop stop-color="#808080" stop-opacity="0.25"/>
            <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
            <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
            </linearGradient>
            <linearGradient id="paint4_linear" x1="30291" y1="5748.13" x2="30291" y2="3047.26" gradientUnits="userSpaceOnUse">
            <stop stop-color="#808080" stop-opacity="0.25"/>
            <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
            <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
            </linearGradient>
            <linearGradient id="paint5_linear" x1="25928.6" y1="27761.4" x2="25928.6" y2="12000.7" gradientUnits="userSpaceOnUse">
            <stop stop-color="#808080" stop-opacity="0.25"/>
            <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
            <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
            </linearGradient>
            </defs>
            </svg>
        </motion.div>
    )
}

export default InsuranceSvg
