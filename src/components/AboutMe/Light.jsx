import { interpolate } from 'flubber';
import { PropTypes } from 'prop-types';
import { motion, useTransform } from 'framer-motion';

const Light = ({pathIndex, progress, paths, opacity}) => {

    Light.propTypes = {
        pathIndex: PropTypes.number,
        progress: PropTypes.object,
        paths: PropTypes.array,
        opacity: PropTypes.object
    }

    const SvgStyle = () => {
        return (
            <defs>
                <linearGradient
                id="Gradient"
                x1="0"
                y1="519.61524"
                x2="519.61524"
                y2="519.61524"
                gradientTransform="scale(0.8660254,1.1547005)"
                gradientUnits="userSpaceOnUse">
                <stop
                    offset="0%"
                    style={{stopColor:"rgba(255, 255, 0, 0.6)"}}
                />
                <stop
                    offset="100%"
                    style={{stopColor:"rgba(255, 255, 0, 0)"}}
                />
                </linearGradient>
                <linearGradient
                id="Gradient-0"
                x1="0"
                y1="519.61523"
                x2="519.61523"
                y2="519.61523"
                gradientTransform="matrix(0.04855686,0,0,1.0211537,212.38456,0.87741987)"
                gradientUnits="userSpaceOnUse">
                <stop
                    offset="0%"
                    style={{stopColor:"rgba(255, 255, 0, 0.6)"}}
                />
                <stop
                    offset="100%"
                    style={{stopColor:"rgba(255, 255, 0, 0)"}}
                />
                </linearGradient>
            </defs>
        )
    }

    const SVGMorph = () => {
        const path = useTransform(progress, [0, 1], [paths[pathIndex], paths[(pathIndex + 1) % paths.length]], {
            mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1000 })
        });
    
        return <motion.path style={{ fill:"url(#Gradient)", opacity:opacity, zIndex: pathIndex ===  1 ? -1 : 0 }} d={path} />;
    };

    // const handleClick = () => {
    //     const nextIndex = (pathIndex + 1) % paths.length;
    //     animate(progress, 1, {
    //         duration: 0.5,
    //         ease: "easeInOut",
    //         onComplete: () => {
    //             setTimeout(() => {
    //                 progress.set(0);
    //                 setPathIndex(nextIndex);
    //             }, 200);
    //         }
    //     });
    //     animate(opacity, nextIndex===1?1:0, {duration: 0.5});
    // };

    return (
        <div>
            <svg width="202500" height="360000" viewBox="0 0 202500 360000">
                <SVGMorph progress={progress} pathIndex={pathIndex} opacity={opacity} paths={paths}/>
                <SvgStyle/>
            </svg>
        </div>
    )

}

export default Light;