import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
import { X, Plus, Star } from 'lucide-react-native';

const FeedbackScreen = ({ navigation }) => {
    const [selectedMood, setSelectedMood] = useState(2);
    const [selectedOptions, setSelectedOptions] = useState({
        service: true,
        quantity: false,
        payment: false,
        delivery: true,
        promotion: false,
        gift: true,
    });
    const [rating, setRating] = useState(4);
    const [feedback, setFeedback] = useState('');
    const [images, setImages] = useState([
        { id: 1, uri: 'headphones-image-url' },
    ]);

    const moods = ['😞', '😐', '😊'];

    const options = [
        { key: 'service', label: 'Service' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'payment', label: 'Payment' },
        { key: 'delivery', label: 'Delivery' },
        { key: 'promotion', label: 'Promotion' },
        { key: 'gift', label: 'Gift' },
    ];

    const toggleOption = (key) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleSubmit = () => {
        alert('Thank you for your feedback!')
        navigation.navigate('Home')
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Feedback</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <X size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.moodContainer}>
                {moods.map((mood, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.moodButton,
                            selectedMood === index && styles.selectedMood,
                        ]}
                        onPress={() => setSelectedMood(index)}
                    >
                        <Text style={styles.moodEmoji}>{mood}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.optionsContainer}>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.key}
                        style={[
                            styles.optionButton,
                            selectedOptions[option.key] && styles.selectedOption,
                        ]}
                        onPress={() => toggleOption(option.key)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedOptions[option.key] && styles.selectedOptionText,
                            ]}
                        >
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.feedbackContainer}>
                <Text style={styles.sectionTitle}>Care to share more?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Type your feedbacks"
                    multiline
                    value={feedback}
                    onChangeText={setFeedback}
                />
            </View>

            <View style={styles.imageUploadContainer}>
                <Text style={styles.sectionTitle}>Upload images</Text>
                <View style={styles.imageList}>
                    <TouchableOpacity style={styles.uploadButton}>
                        <Plus size={24} color="#666" />
                    </TouchableOpacity>
                    {images.map((image) => (
                        <View key={image.id} style={styles.imagePreview}>
                            <Image
                                source={{ uri: image.uri }}
                                style={styles.previewImage}
                            />
                            <TouchableOpacity
                                style={styles.removeImage}
                                onPress={() => {/* Handle remove */}}
                            >
                                <X size={16} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.ratingContainer}>
                <Text style={styles.sectionTitle}>Rating</Text>
                <View style={styles.starsContainer}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <TouchableOpacity
                            key={star}
                            onPress={() => setRating(star)}
                        >
                            <Star
                                size={24}
                                fill={star <= rating ? '#FFD700' : '#E0E0E0'}
                                color={star <= rating ? '#FFD700' : '#E0E0E0'}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    moodContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24,
        gap: 16,
    },
    moodButton: {
        padding: 12,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    selectedMood: {
        borderColor: '#00BCD4',
    },
    moodEmoji: {
        fontSize: 24,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 24,
    },
    optionButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
    },
    selectedOption: {
        backgroundColor: '#00BCD4',
    },
    optionText: {
        color: '#666',
    },
    selectedOptionText: {
        color: '#fff',
    },
    feedbackContainer: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    input: {
        height: 100,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 12,
        textAlignVertical: 'top',
    },
    imageUploadContainer: {
        marginBottom: 24,
    },
    imageList: {
        flexDirection: 'row',
        gap: 8,
    },
    uploadButton: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#666',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePreview: {
        width: 80,
        height: 80,
        borderRadius: 8,
        overflow: 'hidden',
    },
    previewImage: {
        width: '100%',
        height: '100%',
    },
    removeImage: {
        position: 'absolute',
        top: 4,
        right: 4,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 12,
        padding: 4,
    },
    ratingContainer: {
        marginBottom: 24,
    },
    starsContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    submitButton: {
        backgroundColor: '#00BCD4',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 24,
    },
    submitText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default FeedbackScreen;