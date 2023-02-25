import React, { FC, useContext } from 'react';
import { PropsWithClass, User } from '../../../../types';
import { Badge } from '@components/Badge/Badge';
import { Icon16WorkOutline as IconJob } from '@vkontakte/icons';
import { Icon16EducationOutline as IconEducation } from '@vkontakte/icons';
import { ColorContext } from '../../../../context/ColorContext/ColorProvider';
import classNames from 'classnames';
import styles from './UserBadges.module.scss';

type Props = PropsWithClass & {
	user: User;
};

export const UserBadges: FC<Props> = ({ user, className }) => {
	const { svg } = useContext(ColorContext);

	return (
		<div className={classNames(styles.badges, className)}>
			<Badge>
				<IconJob fill={svg.color} />
				{'Яндекс'}
			</Badge>
			<Badge>
				<IconEducation fill={svg.color} />
				{'БГТУ Военмех им. Д.Ф. Устинова'}
			</Badge>
		</div>
	);
};
