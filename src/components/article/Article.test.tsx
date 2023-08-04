import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Article from './Article';
import dayjs from 'dayjs';
import { iArticle } from '../../types/Article';

const mockData: iArticle = {
    isArticleLoading: false,
    data: {
        author: {
            elementType: 'text',
            value: 'Test Author',
        },
        body: {
            elementType: 'text',
            values: ['Test body paragraph 1', 'Test body paragraph 2'],
        },
        date: {
            elementType: 'date',
            value: new Date().toString(),
        },
        heading: {
            elementType: 'text',
            value: 'Test Heading',
        },
        mainImage: {
            elementType: 'image',
            value: {
                leadImage: {
                    url: 'https://example.com/image.jpg',
                },
                leadImageCaption: {
                    value: 'Test Image Caption',
                },
            },
        },
    },
};

// Test 1: Sprawdzamy czy poprawnie renderuje nagłówek artykułu
test('renders the article heading', () => {
    render(<Article {...mockData} />);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
});

// Test 2: Sprawdzamy czy poprawnie renderuje paragrafy treści artykułu
test('renders the article body', () => {
    render(<Article {...mockData} />);
    expect(screen.getByText('Test body paragraph 1')).toBeInTheDocument();
    expect(screen.getByText('Test body paragraph 2')).toBeInTheDocument();
});

// Test 3: Sprawdzamy czy poprawnie renderuje datę publikacji artykułu
test('renders the article publish date', async () => {
    render(<Article {...mockData} />);
    const expectedDate = dayjs(mockData.data.date.value).format('YYYY-MM-DD HH:MM');
    await waitFor(() => {
        expect(screen.getByText(expectedDate)).toBeInTheDocument();
    });
});