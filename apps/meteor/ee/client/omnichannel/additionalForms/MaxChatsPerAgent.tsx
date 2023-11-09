import { NumberInput, Field, FieldLabel, FieldRow } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import type { FC } from 'react';
import React from 'react';

const MaxChatsPerAgent: FC<{
	values: { maxNumberSimultaneousChat: number };
	handlers: { handleMaxNumberSimultaneousChat: () => void };
}> = ({ values, handlers }) => {
	const t = useTranslation();
	const { maxNumberSimultaneousChat } = values;
	const { handleMaxNumberSimultaneousChat } = handlers;

	return (
		<Field>
			<FieldLabel>{t('Max_number_of_chats_per_agent')}</FieldLabel>
			<FieldRow>
				<NumberInput
					name='maxNumberSimultaneousChat'
					data-qa='TextInput-Max-number-of-chats-per-agent'
					value={maxNumberSimultaneousChat}
					onChange={handleMaxNumberSimultaneousChat}
					flexGrow={1}
				/>
			</FieldRow>
		</Field>
	);
};

export default MaxChatsPerAgent;
