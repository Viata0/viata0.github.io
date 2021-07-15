import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTeamInfo = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const FeaturesTeamInfo = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our Team',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={FeaturesTeamInfo}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <span className="testimonial-item-link">
                  Co-Founder & CEO
                </span>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Raphael Lau
                    </h4>
                  <p className="m-0 text-sm">
                    With a strong business development background and a key focus on new trends in the market, Raphael co-founded DeGrave.io. He believes what he is doing for blockchain technology currently will revolutionize and redefine the traditional business.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <span className="testimonial-item-link">
                  Co-Founder & COO
                </span>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Wynne Poon
                    </h4>
                  <p className="m-0 text-sm">
                    Waiting to fill the content
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <span className="testimonial-item-link">
                  Co-Founder & COO
                </span>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Vincent Wong
                    </h4>
                  <p className="m-0 text-sm">
                    A blockchain technology enthusiast and software engineer with experience in leading and managing multiple startups R&D team development.  Currently, DeGrave.io development team led.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <span className="testimonial-item-link">
                  CCO
                </span>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Curtis AuYeung
                    </h4>
                  <p className="m-0 text-sm">
                    Waiting to fill the content.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <span className="testimonial-item-link">
                  CIO
                </span>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Benedict Casino
                    </h4>
                  <p className="m-0 text-sm">
                    Waiting to fill the content.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <span className="testimonial-item-link">
                  CFO
                </span>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Kenny Wong
                    </h4>
                  <p className="m-0 text-sm">
                    Waiting to fill the content.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTeamInfo.propTypes = propTypes;
FeaturesTeamInfo.defaultProps = defaultProps;

export default FeaturesTeamInfo;