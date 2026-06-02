using Avalonia.Controls;

using System.Text.RegularExpressions;
using System;
using TextWrapping = Avalonia.Media.TextWrapping;
using Run = Avalonia.Controls.Documents.Run;
using Brushes = Avalonia.Media.Brushes;
using FontWeight = Avalonia.Media.FontWeight;
using Thickness = Avalonia.Thickness;

using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Dispatcher = Avalonia.Threading.Dispatcher;

using OpenFileDialog = Avalonia.Controls.OpenFileDialog;
using Avalonia.VisualTree;

// using Avalonia.Controls.Primitives;

namespace maui;

public partial class NewsAdmin: UserControl
{

    public NewsAdmin()
    {
        InitializeComponent();
    }

    private void FormatWriting(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
    {
        var text = Writing.Text;
        if (string.IsNullOrWhiteSpace(text))
            return;
        text = text.Replace("\r\n", " ");
        text = text.Trim();
        text = Regex.Replace(text, @"\s+", " ");

        //i want the text to have color of keyword be red

        NewsLayoutContainer.Children.Remove(EditNewsLayoutContainer);

        var textBlock = new TextBlock
                {
                    FontFamily = "Calibri",
                    FontSize = 20,
                    TextWrapping = TextWrapping.Wrap,
                    Margin = new Thickness(20),
                    Width = 600,
                    Height = 500,
                    TextAlignment = Avalonia.Media.TextAlignment.Justify,
                    // VerticalScrollBarVisibility = "Auto"
                    HorizontalAlignment = Avalonia.Layout.HorizontalAlignment.Center,
                }
        ;        
        var keyword = KeyWords.Text;
        if (!(keyword == null || string.IsNullOrWhiteSpace(keyword)))
        {
            // text = text.Replace(keyWords, $"<span style=\"color:red\">{keyWords}</span>", StringComparison.OrdinalIgnoreCase);
            var parts = Regex.Split(text, $"({Regex.Escape(keyword)})", RegexOptions.IgnoreCase);

            foreach (var part in parts)
            {
                if (Regex.IsMatch(part, $"^{Regex.Escape(keyword)}$", RegexOptions.IgnoreCase))
                {
                    // Highlighted run
                    textBlock.Inlines.Add(new Run
                    {
                        Text = part,
                        Foreground = Brushes.Red,
                        FontWeight = FontWeight.Bold,
                    });
                }
                else
                {
                    // Normal run
                    textBlock.Inlines.Add(new Run { Text = part });
                }

            }
        }
        else
        {
            textBlock.Text = text;
        }

        NewsLayoutContainer.Children.Add(textBlock);
    }

    private void UpdateNews(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
    {
        NewsLayoutContainer.Children.Clear();
        NewsLayoutContainer.Children.Add(EditNewsLayoutContainer);

    }

    private void OnUploadClickText(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
    {
        var openFileDialog = new OpenFileDialog
        {
            Title = "Select a text file",
            Filters = new List<FileDialogFilter>
            {
                new FileDialogFilter { Name = "Text Files", Extensions = { "txt" } },
                new FileDialogFilter { Name = "All Files", Extensions = { "*" } }
            }
        };
        var window = this.FindAncestorOfType<Window>();
        var result = openFileDialog.ShowAsync(window);
        result.ContinueWith(task =>
        {
            if (task.Result != null && task.Result.Length > 0)
            {
                var filePath = task.Result[0];
                var fileContent = File.ReadAllText(filePath);
                Dispatcher.UIThread.InvokeAsync(() =>
                {
                    Writing.Text = fileContent;
                });
            }
        });
    }

    private async void OnUploadClick(object? sender, Avalonia.Input.PointerPressedEventArgs e)
    {
        var dialog = new OpenFileDialog
        {
            Title = "Select an image",
            AllowMultiple = false,
            Filters =
            {
                new FileDialogFilter { Name = "Images", Extensions = { "png", "jpg", "jpeg", "bmp" } }
            }
        };

        var window = this.FindAncestorOfType<Window>();
        var result = await dialog.ShowAsync(window);

        if (result != null && result.Length > 0)
        {
            string filePath = result[0];

            // Load image into the box
            var bitmap = new Avalonia.Media.Imaging.Bitmap(filePath);

            var UploadBoxCopy = new Border
            {
                Width = 200,
                Height = 200,
                BorderBrush = Brushes.Gray,
                BorderThickness = new Thickness(1),
                Margin = new Thickness(5)
            };
            ImageLayoutContainer.Children.Add(UploadBoxCopy);
            // Replace the placeholder text with the image
            UploadBoxCopy.Child = new Image
            {
                Source = bitmap,
                Stretch = Avalonia.Media.Stretch.Uniform,
                Width = 200,
                Height = 200
            };
        }
    }
}