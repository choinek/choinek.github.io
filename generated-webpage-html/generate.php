<?php

declare(strict_types=1);

class MarkdownCodeExtractor
{
    private string $input;
    private string $outputDir;

    public function __construct(string $input, string $outputDir)
    {
        $this->input = $input;
        $this->outputDir = rtrim($outputDir, '/');
    }

    public function generateFiles(): void
    {
        preg_match_all('/\*\*(\d+)\.\s`([^`]+)`\*\*\n```[a-z]*\n(.*?)```/s', $this->input, $matches, PREG_SET_ORDER);
        foreach ($matches as $match) {
            $filename = $match[2];
            $content = $match[3];
            $filepath = $this->outputDir . '/' . $filename;
            $dir = dirname($filepath);
            if (!is_dir($dir)) {
                mkdir($dir, 0777, true);
            }
            file_put_contents($filepath, $content);
        }
    }
}

// Example usage:
$markdownInput = file_get_contents('input.md');
$extractor = new MarkdownCodeExtractor($markdownInput, __DIR__ . '/generated');
$extractor->generateFiles();
