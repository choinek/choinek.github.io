/**
 * ArdianBookPage
 * 
 * @author Adrian Chojnicki <adrian@chojnicki.pl>
 * @license MIT
 * @version 1.0.0
 * 
 * Komponent do wyświetlania treści w stylu starej książki z pergaminu,
 * idealny do prezentacji opowieści, dokumentacji historycznej lub
 * treści wymagających atmosfery starożytności.
 */

"use client"

import React from 'react'

interface ArdianBookPageProps {
    /**
     * Tytuł opowieści lub rozdziału
     * @default "Stara opowieść"
     */
    title?: string

    /**
     * Główna treść opowieści (obsługuje podstawową składnię markdown)
     * @default "W dawnych czasach, gdy świat był młody..."
     */
    content?: string

    /**
     * Autor opowieści
     * @default "Nieznany kronikarz"
     */
    author?: string

    /**
     * Data powstania (opcjonalna)
     * @default undefined
     */
    date?: string

    /**
     * Czy wyświetlać efekty starzenia papieru
     * @default true
     */
    showAging?: boolean

    /**
     * Czy wyświetlać ozdobne ramki
     * @default true
     */
    showDecorations?: boolean

    /**
     * Czy wyświetlać efekty pęknięć papieru
     * @default false
     */
    showTears?: boolean

    /**
     * Rozmiar czcionki
     * @default "medium"
     */
    fontSize?: "small" | "medium" | "large"

    /**
     * Dodatkowe klasy CSS
     * @default ""
     */
    className?: string
}

// Simple markdown parser for basic syntax
function parseMarkdown(text: string): React.ReactNode[] {
    if (!text) return []

    const lines = text.split('\n')
    const elements: React.ReactNode[] = []

    lines.forEach((line, index) => {
        if (line.trim() === '') {
            elements.push(<br key={`br-${index}`} />)
            return
        }

        // Headers
        if (line.startsWith('### ')) {
            elements.push(
                <h4 key={`h4-${index}`} style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    margin: '1rem 0 0.5rem 0',
                    color: '#1a0f0a',
                    textIndent: '0'
                }}>
                    {line.substring(4)}
                </h4>
            )
            return
        }

        if (line.startsWith('## ')) {
            elements.push(
                <h3 key={`h3-${index}`} style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    margin: '1rem 0 0.5rem 0',
                    color: '#1a0f0a',
                    textIndent: '0'
                }}>
                    {line.substring(3)}
                </h3>
            )
            return
        }

        if (line.startsWith('# ')) {
            elements.push(
                <h2 key={`h2-${index}`} style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    margin: '1rem 0 0.5rem 0',
                    color: '#1a0f0a',
                    textIndent: '0'
                }}>
                    {line.substring(2)}
                </h2>
            )
            return
        }

        // Lists
        if (line.startsWith('- ') || line.startsWith('* ')) {
            elements.push(
                <div key={`list-${index}`} style={{
                    margin: '0.5rem 0',
                    textIndent: '0',
                    paddingLeft: '2rem'
                }}>
                    • {parseInlineMarkdown(line.substring(2))}
                </div>
            )
            return
        }

        // Regular paragraph
        elements.push(
            <span key={`p-${index}`}>
                {parseInlineMarkdown(line)}
                {index < lines.length - 1 && <br />}
            </span>
        )
    })

    return elements
}

// Parse inline markdown (bold, italic, links)
function parseInlineMarkdown(text: string): React.ReactNode[] {
    interface MarkdownElement {
        index: number
        element: React.ReactNode
    }

    const elements: MarkdownElement[] = []

    // Simple regex patterns for inline elements
    const patterns = [
        { regex: /\*\*(.*?)\*\*/g, tag: 'strong' }, // Bold
        { regex: /\*(.*?)\*/g, tag: 'em' }, // Italic
        { regex: /\[([^\]]+)\]\(([^)]+)\)/g, tag: 'link' }, // Links
    ]

    let processedText = text

    patterns.forEach(({ regex, tag }) => {
        const matches = [...processedText.matchAll(regex)]
        matches.reverse().forEach(match => {
            const [fullMatch, content, url] = match
            const startIndex = match.index!
            const endIndex = startIndex + fullMatch.length

            const before = processedText.substring(0, startIndex)
            const after = processedText.substring(endIndex)

            let replacement: React.ReactNode

            switch (tag) {
                case 'strong':
                    replacement = <strong key={`strong-${startIndex}`} style={{ fontWeight: 'bold' }}>{content}</strong>
                    break
                case 'em':
                    replacement = <em key={`em-${startIndex}`} style={{ fontStyle: 'italic' }}>{content}</em>
                    break
                case 'link':
                    replacement = (
                        <a
                            key={`link-${startIndex}`}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#8b7355',
                                textDecoration: 'underline',
                                textDecorationStyle: 'dotted'
                            }}
                        >
                            {content}
                        </a>
                    )
                    break
                default:
                    replacement = content
            }

            processedText = before + `__REPLACE_${startIndex}__` + after
            elements.unshift({ index: startIndex, element: replacement })
        })
    })

    // Reconstruct the text with replacements
    const parts = processedText.split(/__REPLACE_\d+__/)
    const result: React.ReactNode[] = []

    parts.forEach((part, index) => {
        if (part) {
            result.push(part)
        }
        if (index < parts.length - 1) {
            const element = elements.find(el => el.index === parseInt(part.match(/\d+/)?.[0] || '0'))
            if (element) {
                result.push(element.element)
            }
        }
    })

    return result.length > 0 ? result : [text]
}

export function ArdianBookPage({
    title = "Stara opowieść",
    content = "W dawnych czasach, gdy świat był młody i magia płynęła swobodnie przez ziemie, żył sobie mędrzec, który spisywał wszystkie tajemnice świata w księgach z pergaminu. Każda strona była świadectwem minionych wieków, każde słowo niosło w sobie mądrość przodków.\n\nDziś, gdy otwieramy te starożytne tomiki, możemy poczuć zapach starego papieru i usłyszeć szept dawnych opowieści, które przetrwały próbę czasu i wciąż mają nam coś do powiedzenia.",
    author = "Nieznany kronikarz",
    date,
    showAging = true,
    showDecorations = true,
    showTears = false,
    fontSize = "medium",
    className = "",
}: ArdianBookPageProps) {
    // Style dla starego papieru
    const paperStyles: React.CSSProperties = {
        background: showAging
            ? 'linear-gradient(135deg, #f4f1e8 0%, #e8dcc0 25%, #d4c4a8 50%, #c4b498 75%, #b4a488 100%)'
            : '#f4f1e8',
        border: showDecorations ? '2px solid #8b7355' : '1px solid #d4c4a8',
        borderRadius: '8px',
        padding: '2rem',
        margin: '1rem 0',
        boxShadow: showAging
            ? '0 4px 8px rgba(139, 115, 85, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 2px 4px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        fontFamily: '"Times New Roman", "Georgia", serif',
        lineHeight: '1.6',
        color: '#2c1810',
        fontSize: fontSize === "small" ? '0.9rem' : fontSize === "large" ? '1.2rem' : '1rem',
        textAlign: 'justify',
        letterSpacing: '0.5px',
    }

    // Style dla tytułu
    const titleStyles: React.CSSProperties = {
        fontSize: fontSize === "small" ? '1.4rem' : fontSize === "large" ? '2rem' : '1.7rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#1a0f0a',
        textShadow: '1px 1px 2px rgba(139, 115, 85, 0.3)',
        borderBottom: showDecorations ? '2px solid #8b7355' : '1px solid #d4c4a8',
        paddingBottom: '0.5rem',
        fontFamily: '"Palatino", "Times New Roman", serif',
    }

    // Style dla treści
    const contentStyles: React.CSSProperties = {
        marginBottom: '1.5rem',
        textIndent: '2rem',
        whiteSpace: 'pre-line',
    }

    // Style dla autora i daty
    const metaStyles: React.CSSProperties = {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: fontSize === "small" ? '0.8rem' : fontSize === "large" ? '1rem' : '0.9rem',
        color: '#5d4e37',
        borderTop: showDecorations ? '1px solid #8b7355' : '1px solid #d4c4a8',
        paddingTop: '0.5rem',
        marginTop: '1rem',
    }

    // Style dla ozdobnych elementów
    const decorationStyles: React.CSSProperties = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        width: '20px',
        height: '20px',
        border: '1px solid #8b7355',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #f4f1e8 30%, #d4c4a8 70%)',
    }

    return (
        <div className={`ardian-book-page ${className}`} style={paperStyles}>
            {showDecorations && (
                <>
                    <div style={decorationStyles}></div>
                    <div style={{ ...decorationStyles, top: '40px', right: '10px' }}></div>
                    <div style={{ ...decorationStyles, top: '10px', left: '10px' }}></div>
                    <div style={{ ...decorationStyles, top: '40px', left: '10px' }}></div>
                </>
            )}

            <h2 style={titleStyles}>{title}</h2>

            <div style={contentStyles}>
                {parseMarkdown(content)}
            </div>

            <div style={metaStyles}>
                <div>{author}</div>
                {date && <div style={{ marginTop: '0.25rem' }}>{date}</div>}
            </div>
        </div>
    )
}

export type { ArdianBookPageProps }